require 'rails_helper'

RSpec.describe Task, type: :model do
  describe 'validations' do
    it 'is invalid without a title' do
      task = build(:task, title: nil)
      task.valid?
      expect(task).not_to be_valid
      expect(task.errors[:title]).to include("can't be blank")
    end

  end
end
