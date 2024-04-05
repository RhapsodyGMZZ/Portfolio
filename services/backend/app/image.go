package handlers

import "net/http"

func HandleImage(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}
	opt := r.URL.Query().Get("opt")

	switch opt {
	case "avatar":
		http.ServeFile(w, r, "static/avatar.jpg")
	}
}
