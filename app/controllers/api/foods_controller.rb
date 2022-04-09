class Api::CatsController < ApplicationController
  before_action :set_food, only: [:show, :update, :destroy, :switchOwner ]
  
  def index
    render json: current_user.foods
  end

  def show
    render json: @food
  end

  def create
    @food = current_user.foods.new(food_params)
    if @food.save
      render json: @food
    else
      render json: { errors: @food.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @food.update(food_params)
      render json: @food
    else
      render json: { errors: @food.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @food.destroy
    render json: { message: 'Food Deleted' }
  end

  def randomFoods
    @foods = Food.all - current_user.foods
    render json: @foods
  end

  def switchOwner
    @food.user_id = current_user.id
    if @food.save
      render json: @food
    else
      render json: { errors: @food.errors }, status: :unprocessable_entity
    end
  end

  private 

    def set_food
      @food = current_user.foods.find(params[:id])
    end

    def food_params
      params.require(:food).permit(:food_name, :food_type, :image)
    end
end