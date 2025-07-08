package handlers

import (
	"log"
	"net/http"
)

func HandleImage(w http.ResponseWriter, r *http.Request) {
	log.Println("GET IMAGE")
	opt := r.URL.Query().Get("opt")
	http.ServeFile(w, r, "static/"+opt)
}

func ServeJsonProject(w http.ResponseWriter, r *http.Request) {
	log.Println("GET JSON")
	log.Println(w.Header())
	log.Println(r.Header)
	http.ServeFile(w, r, "static/projects.json")
}
