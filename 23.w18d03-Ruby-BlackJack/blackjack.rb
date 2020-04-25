

#define classes
class Player
    attr_reader :name, :bankroll
    attr_accessor :hand_total, :hand

    def initialize(name:, bankroll:, hand:)
        @name = name
        @bankroll = bankroll
        @hand = hand
        @ace_adjust = 0
    end

    def draw_two cardArray
        @hand = cardArray
    end

    def draw_one card
        @hand << card.pop #for some reason card is an array so we have to pop it from array before shoveling
    end

    def tally_hand
        total = 0
        hand.each{|card|total += card.value}
        #hand.inject{|sum, n| sum.value + n.value}
        @hand_total = total
    end

    def ace_check
        aceTally = 0
        #tally aces in hand
        hand.each{|card| 
            if card.number == "ace"
                aceTally +=1
            end
        }

        # if hand is greater than 21 and ace adjust hasn't already been performed
        iteration = 0
        while hand_total > 21 && iteration < aceTally
            @hand_total -= 10
            @ace_adjust +=1 #increment ace adjust so can't be used again
            iteration += 1
        end
    end

    def print_formatted_hand
        pips = ['♣','♦','♥','♠']

        puts "\n"
        puts "#{name}'s hand:"
        hand.each{|card| 
            print "______ "
        }
        puts "\n"
        hand.each{|card| 
            print "|    | "
        }
        puts "\n"
        hand.each{|card| 
            print "| #{card.number[0].upcase}"  
            case card.suit
            when "spades"
                print pips[3]
            when "hearts"
                print pips[2]
            when "diamonds"
                print pips[1]
            when "clubs"
                print pips[0]
            end
            print " | "
        }
        puts "\n"    
        hand.each{|card| 
            print "|    | "
        }
        puts "\n"        
        hand.each{|card| 
            print "------ "
        }
        puts "\n"
        puts hand_total
    end   


    def money_in
        @bankroll += 10
    end

    def money_out
        @bankroll -= 10
    end
end

class Card 
    attr_reader :number, :suit, :value

    def initialize(number:, suit:, value:)
        @number = number
        @suit = suit
        @value = value
    end

    def self.pushDeck card,deck
        deck.push(
            card
        )
    end
end

########################

#methods

#make a new deck
def makeNewDeck deck
    suits = ["hearts", "diamonds", "clubs", "spades"]

    suits.each{|suit| 

        numbers = [ ['2',2],['3',3],['4',4],['5',5],['6',6],['7',7],['8',8],['9',9],['ten',10],["jack", 10],["queen", 10], ["king", 10], ["ace", 11] ]

        numbers.each{
            |number| 
            makeCard = Card.new(number: number[0], suit: suit, value: number[1])
            Card.pushDeck makeCard,deck
        }

    }
end

#shuffle the deck (n times over)
def shuffle! (n=7)
    n.times {deck.shuffle!}
end

#initialize players
def declare_players playerName
    $player1 = Player.new(name: playerName, bankroll: 100, hand: [])
    #p player1
    
    $the_house = Player.new(name: 'the_house', bankroll: 10000, hand: [])
    # the_house
end

#draw cards
def draw_cards number_of_draws, deck
    results = []
    number_of_draws.times {results << deck.pop}
    results
end

#deal another card after the initial two
def deal_another a_Player, deck
    # if human player do this:
    if a_Player != $the_house
        puts "(d)o you want another card?"
        another_card = gets.chomp
        if another_card == "d"
            card = draw_cards 1,deck
            a_Player.draw_one card
            a_Player.tally_hand
            a_Player.ace_check
            #puts "#{a_Player.name}'s hand: #{a_Player.hand}"
            #puts "#{a_Player.name}'s total: #{a_Player.hand_total}"
            a_Player.print_formatted_hand  
            if a_Player.hand_total > 21
                puts "#{a_Player.name} busted"
            elsif a_Player.hand_total < 21
                deal_another a_Player, deck
            elsif a_Player.hand == 21
                puts "staying at 21"
            end
        end
    else 
        # if house do this:
        if a_Player.hand_total < 17
            card = draw_cards 1,deck
            a_Player.draw_one card
            a_Player.tally_hand
            a_Player.ace_check
            #puts "#{a_Player.name}'s hand: #{a_Player.hand}"
            #puts "#{a_Player.name}'s total: #{a_Player.hand_total}"
            a_Player.print_formatted_hand
            if a_Player.hand_total > 21
                puts "#{a_Player.name} busted"
            end
            deal_another a_Player, deck
        else 
            #puts "#{a_Player.name}'s hand: #{a_Player.hand}"
            #puts "#{a_Player.name}'s total: #{a_Player.hand_total}" 
            a_Player.print_formatted_hand    
        end  
    end

end


def play_round deck
    #player 1 turn
    cards = draw_cards 2,deck
    $player1.draw_two cards
    $player1.tally_hand
    #p "#{$player1.name}'s hand: #{$player1.hand}"
    #p "#{$player1.name}'s total: #{$player1.hand_total}"
    $player1.print_formatted_hand
    
    #house's turn
    cards = draw_cards 2,deck
    $the_house.draw_two cards
    $the_house.tally_hand
    #p "#{$the_house.name}'s hand: #{$the_house.hand}"
    #p "#{$the_house.name}'s total: #{$the_house.hand_total}"
    $the_house.print_formatted_hand

    deal_another $player1, deck
    deal_another $the_house, deck
end

def calculate_winner
    if $player1.hand_total > $the_house.hand_total && $player1.hand_total < 21
        p "#{$player1.name} wins this hand"
        $player1.money_in
        $the_house.money_out
    elsif $player1.hand_total < $the_house.hand_total || $player1.hand_total > 21
        p "#{$player1.name} loses this hand"
        $player1.money_out
        $the_house.money_in
    else
        p "Its a tie!"
    end
    puts "\n"
    p "#{$player1.name}'s bankroll: #{$player1.bankroll}"
    p "#{$the_house.name}'s bankroll: #{$the_house.bankroll}"

end

def start_game playerName
    p "starting the game"
    declare_players playerName #sets new class intances
    deck1 = []
    makeNewDeck deck1 #makes a new deck
    deck1.shuffle! #shuffle the deck
    play_round deck1 #play a round
    calculate_winner #who won and transfer money
    deal_again $player1.name, deck1
end

def another_round playerName, deck
    p "another round"
    deck1 = []
    makeNewDeck deck1 #makes a new deck
    deck1.shuffle! #shuffle the deck
    play_round deck1 #play a round
    calculate_winner #who won and transfer money
    deal_again playerName, deck1
end

def deal_again playerName, deck
    puts "(d)eal again?"
    deal_again = gets.chomp
    if deal_again == "d"
        another_round playerName, deck
    else
        puts "game over"
    end
end

########################


#Getting Started
puts "Welcome to Blackjack please enter your name:"
name = gets.chomp

#welcome
puts "welcome #{name}"
puts "\n"

#start initializer
puts "type 'd' to deal"
gameStart = gets.chomp
if gameStart == "d"
    start_game name
else
    puts "maybe another time then"
end
