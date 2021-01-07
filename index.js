const int = Math.ceil(Math.random() * 76)
const url = `https://www.youtube.com/embed/videoseries?list=PLDxTQYPyq4JTRvdmYDiykyOdoEjjyuQgI&index=${int}&autoplay=1`
const embed = document.getElementById('embed')
embed.src = url
