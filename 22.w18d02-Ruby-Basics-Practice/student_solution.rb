# Hello World
# Print "Hello World" to the console
p "Hello World"

# After you have printed Hello World:

adjective = "Big Bad"

# Interpolate the adjective variable into the Hello World string using #{}
# Expected output:

# => Hello Big Bad World

p "Hello #{adjective} World"

# Save "Hello World" to a variable. Without changing the letters in your code manually, 
#permanently change "Hello World" to all uppercased letters.

hello = "Hello World"
hello.upcase!
p hello


#______Nums Array and Enumerables
#With the following array:

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

#1 Use .uniq to print the array with all duplicate entries removed

p "#{nums.uniq}"

#2 Next, use .push and .pop , .shift .unshift and .length on the array as you would 
#with javaScript (if you need to add a number, add 5)

p nums.push 5
p nums.pop
p nums.shift
p nums.unshift 5
p nums.length

#3 Use .include? to check if the array contains the number 8

p nums.include? 8

#4 Use .find_all to find all the numbers greater than 10

p nums.find_all{ |num| num > 10}

#5 use .all? to check if all the numbers are greater than 0?

p nums.all?{ |num| num > 0}

#6 use any? to check if there are any numbers that are divisible by 8

p nums.any?{|num| num >= 8 && num % 8 == 0}

#7 use .count to let you know how many numbers are greater than 4

p nums.count{|num| num > 4}

#8 use .each_with_index to print each item times its index

nums.each_with_index{ |num, index| print "#{num * index}, "}
puts "\n"

#9 .find the number that is divisible by 7 and 5 and is greater than 0

p nums.find{|num| num % 7 == 0 && num % 5 == 0 && num > 0}

#10 .find_index of the number that is divisible by 5 and 7 and is greater than 0

p nums.find_index{|num| num % 7 == 0 && num % 5 == 0 && num > 0}

#11 return the .first 3 numbers

p nums.first(3)

#12 return the .last 5 numbers

p nums.last(5)

#13 .group_by the modulo of 3 ( % 3 )

p nums.group_by{|num| num % 3}

#14 use minmax to return the smallest and largest number

p nums.minmax

#15 use .reject to return all the numbers that are NOT divisible by 3

p nums.reject{|num| num % 3 != 0}

#16 use .select to return all the numbers divisible by 5

p nums.select{|num| num % 5 == 0}


#___Color Array
#With the following array:

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

#1 Print out a random color.

p colors.sample

#2 Print out the colors array in reverse order.

p colors.reverse

#3 Print out all of the colors in the array with all capital letters.

colors.each{|color| print "#{color.upcase}, "}



#__________Methods

#Write a method named find_area that finds the area of a rectangle when given 
#values for width and height

def find_area height, width
    height * width
   end

   p find_area 9,3

   #***

   #Write a method named multiply_each_by_five that will loop over the given 
   #nums array below and print each number multiplied by 5

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

def multiply_each_by_five arr
    array.each{|num| print "#{num * 5}, "}
end

multiply_each_by_five moreNums


#______Methods With a Hash
#Use the following given hashes to solve the problems below

# Hashes

book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}
#Write a method named print_price that will take in any hash and return the price of the item.

#Write a method named print_item_sums that will take in two hashes and will return the sum of the prices for the items in the hashes.

#____________

# Solving Problems with Ruby
# Euler Problem 1
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.



#_______Primes
# Write a method called check_prime? that will test whether a number is Prime. 
# The method will return true if Prime, false if not.

# Write another method called get_primes that will print all the Primes up to an 
# arbitrary limit. For example, if you invoke your method with 
# get_primes 100, it will print all the Prime numbers up to and including 100.

# This method can call on the previous check_prime? method.
# Check out the documentation on Ruby's Prime class

# Reminders:

# A Prime number is a number that is not evenly divisible by another 
# number except 1 and itself. To test whether a number is Prime, you only need to 
# test as far as the square root of that number. This is advisable for optimization and 
# testing large numbers.