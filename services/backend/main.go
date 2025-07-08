package main

import (
	"log"
	"net/http"
	s "portfolio/server"
)

func main() {
	router := s.HTTPHandling()
	log.Println("Listening on 8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
