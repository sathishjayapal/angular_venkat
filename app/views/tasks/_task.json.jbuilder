json.extract! task, :id, :taskName, :taskDescr, :created_at, :updated_at
json.url task_url(task, format: :json)