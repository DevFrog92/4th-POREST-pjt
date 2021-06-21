FROM ubuntu:latest
ARG DEBIAN_FRONTEND=noninteractive
ENV LANG=C.UTF-8
ENV TZ=Asia/Seoul
RUN apt-get update && \
    apt-get install -y --no-install-recommends tzdata g++ git curl

RUN apt-get install -y default-jdk default-jre
RUN apt-get install -y python3-pip python3-dev
RUN cd /usr/local/bin && \
    ln -s /usr/bin/python3 python && \
    ln -s /usr/bin/pip3 pip && \
    pip3 install --upgrade pip

# apt cleanse
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*
# timezone
RUN ln -sf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /app
COPY . /app

RUN pip install -r requirements.txt

EXPOSE 8082

ENTRYPOINT ["python"]

CMD ["app.py"]
