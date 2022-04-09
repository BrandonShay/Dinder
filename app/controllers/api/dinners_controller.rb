class Api::DinnersController < ApplicationController
  before_action :set_food
  before_action :set_dinner, only: [:update, :show, :destroy]
  
  def index
    render json: @food.dinners
  end

  def show
    render json: @dinner
  end

  def create
    @dinner = @food.dinners.new(dinner_params)
    if @dinner.save
      render json: @dinner
    else
      render json: { errors: @dinner.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @dinner.update(dinner_params)
      render json: @dinner
    else
      render json: { errors: @dinner.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @dinner.destroy
    render json: { message: 'Dinner deleted'}
  end

  private 
    def set_food
      @food = Food.find(params[:food_id])
    end

    def set_dinner
      @dinner = @food.dinners.find(params[:id])
    end

    def dinner_params
      params.require(:dinner).permit(:ingredients, :recipe, :cook_time, :difficulty, :servings, :image)
    end
end