FROM golang:1.11-alpine3.7 AS builder-go

WORKDIR /go/src/app

COPY hello.go .

RUN go build hello.go

# Buildando imagem pequena somente para executar

FROM scratch

COPY --from=builder-go /go/src/app/hello .

ENTRYPOINT ["./hello"]