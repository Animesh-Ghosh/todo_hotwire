class Task < ApplicationRecord
  validates :title, presence: true
  validates :completed, inclusion: { in: [true, false] }

  after_create_commit -> { broadcast_append_later_to :tasks }
  after_update_commit -> { broadcast_render_to :tasks, partial: 'tasks/update' }
  after_destroy_commit -> { broadcast_remove_to :tasks }

  acts_as_list top_of_list: 0
end
