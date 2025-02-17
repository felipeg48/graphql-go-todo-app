package main

import (
	"context"
	"errors"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/felipeg48/todo-app/graph"
	"github.com/rs/cors"
	"log"
	"net/http"
	"os"
	"runtime/debug"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	srv := handler.New(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))
	srv.AddTransport(transport.POST{})
	srv.AddTransport(transport.GET{})
	srv.SetRecoverFunc(func(ctx context.Context, err any) (userMessage error) {
		// send this panic somewhere
		log.Print(err)
		debug.PrintStack()
		return errors.New("user message on panic")
	})

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:8081"},
		AllowCredentials: true, // If you need to send cookies
	})
	handlerWithCORS := c.Handler(srv)

	http.Handle("/", playground.Handler("GraphQL Playground", "/query"))
	http.Handle("/query", handlerWithCORS)

	log.Printf("connect to http://localhost:%s/ for GraphQL Playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
