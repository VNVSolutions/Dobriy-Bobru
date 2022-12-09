FROM python:3

ENV PYTHONUNBUFFERED 1

RUN mkdir /dobriybober

WORKDIR /dobriybober

COPY requirements.txt /dobriybober/

RUN pip install --upgrade pip && pip install -r requirements.txt

ADD . /dobriybober/