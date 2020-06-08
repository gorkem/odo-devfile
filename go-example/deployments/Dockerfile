FROM quay.io/eclipse/che-golang-1.12:nightly
WORKDIR /app
ADD . .
RUN go install ./
ENTRYPOINT go-example
