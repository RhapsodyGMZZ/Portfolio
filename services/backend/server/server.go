package server

import (
	m "portfolio/middleware"
	h "portfolio/route"

	"github.com/go-chi/chi/v5"
)

func HTTPHandling() *chi.Mux {
	router := chi.NewRouter()

	router.Use(m.CORSMiddleware)
	router.Use(m.CSRFMiddleware)
	router.Use(m.SecurityHeadersMiddleware)

	router.Get("/api/image", h.HandleImage)
	router.Get("/api/projects-json", h.ServeJsonProject)
	return router
}
