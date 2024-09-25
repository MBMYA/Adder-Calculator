# Adder Calculator React Test

This project is a react test assesment of an adder calculator. This project was created using react and containerized with docker.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## To run container
To run the container for the project. First, you need to go to the "frontend" directory of the project, build the image, then run the container.\

### `docker build -t "image-name" .`

This will build an image with an "image-name" of your choice.

### `docker run -d -p 3000:3000 --name "container-name" "image-name"`

This will create a container with "container-name" from the created "image-name".\
It will expose container port 3000 to the machine port 3000 and you can access the website from [http://localhost:3000](http://localhost:3000)

### `docker stop "container-name"`

To stop the container from running.\

### `docker rm "container-name"`

To delete the container and remove it from memory.\

### `docker rmi "image-name"`

To delete and remove the image created.\
