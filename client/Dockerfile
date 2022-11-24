FROM node:16-alpine as builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
FROM nginx:alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
