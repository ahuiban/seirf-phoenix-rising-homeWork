class TweetsController < ApplicationController

    def index
        render json: { status: "200", tweet: Tweet.all}
    end

    def show
        found_tweet = Tweet.find(params[:id])
        render json: { status: 200, tweet: found_tweet}
    end






end

