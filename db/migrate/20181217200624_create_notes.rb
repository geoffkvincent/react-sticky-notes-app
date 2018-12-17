class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :description
      t.boolean :complete

      t.timestamps
    end
  end
end
