package main

import (
	"net/http"
	s "portfolio/server"
)

func main() {
	s.HTTPHandling()
	http.ListenAndServe(":8080", nil)
}
