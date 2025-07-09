FROM golang:1.24-alpine3.22

WORKDIR /app

COPY . ./

# RUN go build -o /backend main.go

EXPOSE 8080

# CMD [ "/backend" ]
CMD [ "go", "run", "main.go" ]