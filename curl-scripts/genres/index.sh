curl "http://localhost:4741/genres" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "genre": {
      "song_id": "1"
    }
  }'

echo
