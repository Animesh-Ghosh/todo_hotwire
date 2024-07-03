class Task < ApplicationRecord
  validates :title, presence: true
  validates :completed, inclusion: { in: [true, false] }

  broadcasts_to ->(task) { :tasks }, inserts_by: :prepend
end
