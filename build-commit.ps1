# Note that this script commits all changes in the active directory
# make sure that all the changes are the changes you want to commit

# Build
hugo

# Stage, Commit, and Push Static Page Files
cd pbinspanish.github.io
git add .
git commit -m $Args[0]
git push -u origin master

# Stage, Commit, and Push Hugo Files
cd ..
git add .
git commit -m $Args[0]
git push -u origin master