class Task < ApplicationRecord
  validates :title, presence: true
  validates :completed, inclusion: { in: [true, false] }
end
