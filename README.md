# Luis Jair website

This project was developed with **React and tailwind.**

With this project I seek to show my personal information, technologies I use, my experience and projects I have completed.

## To run this project follow the steps below

### Requirements

- Node +18

### Steps

1. **Clone repository**

```bash
git clone https://github.com/ElNao28/portafolio.git
```

2. **Install dependences**

```bash
npm install
```

3. **Run app**

```bash
npm start
```

### Deploy by Docker

1. Build image

```bash
docker build -t name_image .
```

2. Build container by image

```bash
docker container run -p 8080:80 name_image
```

### Notes

If already build you the container run this command

```bash
docker container start id_container
```

#### Visit website

[Portafolio](https://luis-jair.vercel.app/)
