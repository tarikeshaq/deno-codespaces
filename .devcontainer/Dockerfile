FROM ubuntu:18.04

WORKDIR /home/

COPY . .

RUN bash ./setup.sh

RUN echo 'export DENO_INSTALL="/root/.deno"' >> "$HOME/.zshrc"
RUN echo '\n' >> "$HOME/.zshrc"
RUN echo 'export PATH=$DENO_INSTALL/bin:$PATH' >> "$HOME/.zshrc"
