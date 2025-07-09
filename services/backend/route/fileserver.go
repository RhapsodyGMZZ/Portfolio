package handlers

import (
	"net/http"
)

func HandleImage(w http.ResponseWriter, r *http.Request) {
	opt := r.URL.Query().Get("opt")
	http.ServeFile(w, r, "static/"+opt+".png")
}

func ServeJsonProject(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "static/projects.json")
}
