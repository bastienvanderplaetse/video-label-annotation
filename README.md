# Video label annotation tool

This repository proposes a basic tool to annotate the label of videos. It is fully client-side and does not require any installation except a web browser (even without internet connection).

## How to use

Start by cloning this repository
```
git clone https://github.com/bastienvanderplaetse/video-label-annotation.git
```

Edit the `main.js` file located into the `js` folder. Particularly, change the definition of the `var languages` variable at line 3. Do not remove the item at index `0`. Write down your labels in this variable on the others IDs. 

Next, open the `index.html` file (located into the root folder) with your web browser. It will open the annotation tool. Click on the top button to select all the videos you want to annotate. Then, you will be able to visualize the first video and select one of the available label to annotate this video. If you want to add a new label, you can select the `Other` option to write it in the text field. When you have chosen the correct label for the video, click on the `Submit` button and the application will move on the next video.

You will be informed when all the videos are annotated. A file named `annotations.json` will be automatically downloaded through your web browser. This file contains a dictionary where the key is the name of the video file and the value is the label selected for this video.

## Author

Bastien Vanderplaetse (bastien.vanderplaetse@umons.ac.be) - [GitHub](https://github.com/bastienvanderplaetse)

<img src="./images/UMONS-EN-rvb.png" width=150 align=left><img src="./images/ISIA-logo.png" width=150 align=left><img src="./images/numediart.png" width=150 align=left>
