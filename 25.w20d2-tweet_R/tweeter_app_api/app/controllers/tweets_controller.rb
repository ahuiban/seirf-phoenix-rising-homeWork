class TweetsController < ApplicationController

    def index
        render json: { status: "200", tweet: Tweet.all}
    end

    def show
        found_tweet = Tweet.find(params[:id])
        render json: { status: 200, tweet: tweet}
    end

    def create
        tweet = Tweet.new(tweet_params)
        if tweet.save
            render(status: 201, json: { tweet: tweet })
        else 
            render(status: 422, json: { tweet: tweet })
    end
end


def update
    tweet = Tweet.find(params[:id])
    tweet.update(tweet_params)
    render(json: { tweet: tweet })
  end




private
def tweet_params
    params.require(:tweet).permit(:title, :content, :author)

end
end

