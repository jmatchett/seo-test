class TestController < ApplicationController
  def index
  end
  def robots
  	respond_to :text
  end
end
