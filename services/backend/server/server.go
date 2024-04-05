package server

import (
	"net/http"
	h "portfolio/app"
)

func HTTPHandling() {
	http.HandleFunc("/api/image", h.HandleImage)
}
