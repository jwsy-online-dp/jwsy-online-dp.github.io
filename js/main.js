(() => {

    let yOffset = 0
    let prevScrollHeight = 0
    let currentSection = 0
    let enterNewScene = false
    let scrollDirectionUp = null

    const sectionInfo = [
        {
            // scroll-section-0
            type: "scroll-anim",
            height: 1,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-0"),
                textFirst: document.querySelector("#scroll-section-0 .dimed-text.first"),
                textSecond: document.querySelector("#scroll-section-0 .dimed-text.second"),
            },
            values: {
                textFirst: [1, 0, { start: 0.1, end: 0.4 }],
                textSecond: [1, 0, { start: 0.3, end: 0.5 }],
            }
        },
        {
            // scroll-section-1
            type: "scroll-anim",
            height: 3,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-1"),
                messageOne: document.querySelector('#scroll-section-1 .main-message.one'),
                messageTwo: document.querySelector('#scroll-section-1 .main-message.two'),
                messageThree: document.querySelector('#scroll-section-1 .main-message.three'),
                messageFour: document.querySelector('#scroll-section-1 .main-message.four'),
                messageFive: document.querySelector('#scroll-section-1 .main-message.five'),

                canvas: document.querySelector("#video-canvas-1"),
                context: document.querySelector("#video-canvas-1").getContext("2d"),
                videoImages: [],
            },
            values: {
                messageOneOpacityIn: [0, 1, { start: 0.1, end: 0.18 }],
                messageTwoOpacityIn: [0, 1, { start: 0.26, end: 0.34 }],
                messageThreeOpacityIn: [0, 1, { start: 0.42, end: 0.5 }],
                messageFourOpacityIn: [0, 1, { start: 0.58, end: 0.65 }],
                messageFiveOpacityIn: [0, 1, { start: 0.72, end: 0.81 }],

                messageOneOpacityOut: [1, 0, { start: 0.18, end: 0.26 }],
                messageTwoOpacityOut: [1, 0, { start: 0.34, end: 0.42 }],
                messageThreeOpacityOut: [1, 0, { start: 0.5, end: 0.58 }],
                messageFourOpacityOut: [1, 0, { start: 0.65, end: 0.72 }],
                messageFiveOpacityOut: [1, 0, { start: 0.81, end: 0.9 }],

                messageOneTranslateYIn: [20, 0, { start: 0.1, end: 0.18 }],
                messageTwoTranslateYIn: [20, 0, { start: 0.26, end: 0.34 }],
                messageThreeTranslateYIn: [20, 0, { start: 0.42, end: 0.5 }],
                messageFourTranslateYIn: [20, 0, { start: 0.58, end: 0.65 }],
                messageFiveTranslateYIn: [20, 0, { start: 0.72, end: 0.81 }],

                messageOneTranslateYOut: [0, -20, { start: 0.18, end: 0.26 }],
                messageTwoTranslateYOut: [0, -20, { start: 0.34, end: 0.42 }],
                messageThreeTranslateYOut: [0, -20, { start: 0.5, end: 0.58 }],
                messageFourTranslateYOut: [0, -20, { start: 0.65, end: 0.72 }],
                messageFiveTranslateYOut: [0, -20, { start: 0.81, end: 0.9 }],

                videoImageCount: 338,
                imageSequence: [0, 337],
                canvasOpacityIn: [0, 1, { start: 0, end: 0.1 }],
            }
        },
        {
            // scroll-section-2
            type: "scroll-anim",
            height: 3,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-2"),
                titleBox: document.querySelector("#scroll-section-2 .title-box"),

                imageCanvas: document.querySelector("#image-canvas-1"),
                imageCanvasContext: document.querySelector("#image-canvas-1").getContext("2d"),

                stillImagePaths: [
                    `./video/001/IMG1338.jpg`
                ],
                stillImages: []
            },
            values: {
                titleBoxOpacityIn: [0, 1, { start: 0.1, end: 0.1 }],
                titleBoxOpacityOut: [1, 0, { start: 0.9, end: 0.9 }],
                titleBoxTranslateYIn: [300, 0, { start: 0.1, end: 0.4 }],
                titleBoxTranslateYOut: [0, -300, { start: 0.7, end: 0.9 }],

                imageCanvasOpacityOut: [1, 0, { start: 0.4, end: 0.7 }],

                stillImageHeightIn: [window.innerHeight / 1080, 350 / 1080, { start: 0.1, end: 0.4 }]
            }
        },
        {
            // scroll-section-3
            type: "scroll-anim",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-3"),
                leftMockScreen: document.querySelector("#scroll-section-3 .left-mock-screen"),

                flowTextOne: document.querySelector("#scroll-section-3 .flow-text.one"),
                flowTextTwo: document.querySelector("#scroll-section-3 .flow-text.two"),
                flowTextThree: document.querySelector("#scroll-section-3 .flow-text.three"),

                leftMockImageOne: document.querySelector("#scroll-section-3 .left-mock-screen-video.one"),
                leftMockImageTwo: document.querySelector("#scroll-section-3 .left-mock-screen-video.two"),
                leftMockImageThree: document.querySelector("#scroll-section-3 .left-mock-screen-video.three"),
            },
            values: {
                leftMockScreenOpacityIn: [0, 1, { start: 0.1, end: 0.1 }],
                leftMockScreenOpacityOut: [1, 0, { start: 0.9, end: 1 }],
                leftMockScreenTranslateYIn: [200, 0, { start: 0.1, end: 0.2 }],

                flowTextOneTranslateYIn: [400, 0, { start: 0.15, end: 0.2 }],
                flowTextOneTranslateYOut: [0, -400, { start: 0.2, end: 0.3 }],

                flowTextTwoTranslateYIn: [400, 0, { start: 0.4, end: 0.5 }],
                flowTextTwoTranslateYOut: [0, -400, { start: 0.5, end: 0.6 }],

                flowTextThreeTranslateYIn: [400, 0, { start: 0.7, end: 0.8 }],
                flowTextThreeTranslateYOut: [0, -400, { start: 0.8, end: 0.9 }],

                leftMockImageOneOpacityIn: [0, 1, { start: 0.15, end: 0.2 }],
                leftMockImageOneOpacityOut: [1, 0, { start: 0.2, end: 0.3 }],

                leftMockImageTwoOpacityIn: [0, 1, { start: 0.4, end: 0.5 }],
                leftMockImageTwoOpacityOut: [1, 0, { start: 0.5, end: 0.6 }],

                leftMockImageThreeOpacityIn: [0, 1, { start: 0.7, end: 0.8 }],
                leftMockImageThreeOpacityOut: [1, 0, { start: 0.9, end: 1 }],
            }
        },
        {
            // scroll-section-4
            type: "scroll-anim",
            height: 3,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-4"),

                flowTitle: document.querySelector("#scroll-section-4 .flow-title"),

                backgroundVideo: document.querySelector("#scroll-section-4 .full-video")
            },
            values: {
                flowTitleOpacityIn: [0, 1, { start: 0, end: 0 }],
                flowTitleOpacityOut: [1, 0, { start: 0.5, end: 0.5 }],

                flowTitleTranslateYIn: [400, 0, { start: 0, end: 0.3 }],
                flowTitleTranslateYOut: [0, -400, { start: 0.3, end: 0.5 }],

                flowTitleScaleIn: [0.5, 1, { start: 0, end: 0.3 }],

                backgroundVideoOpacityIn: [0, 1, { start: 0.5, end: 0.6 }],
                backgroundVideoOpacityOut: [1, 0, { start: 0.8, end: 0.9 }],

                backgroundVideoTranslateYIn: [100, 0, { start: 0.5, end: 0.6 }],
                backgroundVideoTranslateYOut: [0, -100, { start: 0.8, end: 0.9 }],
            }
        },
        {
            // scroll-section-5
            type: "scroll-anim",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-5"),

                rightMockScreen: document.querySelector("#scroll-section-5 .right-mock-screen"),

                flowTextOne: document.querySelector("#scroll-section-5 .flow-text.one"),
                flowTextTwo: document.querySelector("#scroll-section-5 .flow-text.two"),
                flowTextThree: document.querySelector("#scroll-section-5 .flow-text.three"),

                rightMockVideoOne: document.querySelector("#scroll-section-5 .right-mock-screen-video.one"),
                rightMockVideoTwo: document.querySelector("#scroll-section-5 .right-mock-screen-video.two"),
                rightMockVideoThree: document.querySelector("#scroll-section-5 .right-mock-screen-video.three"),
            },
            values: {
                rightMockScreenOpacityIn: [0, 1, { start: 0.1, end: 0.2 }],
                rightMockScreenOpacityOut: [1, 0, { start: 0.9, end: 1 }],
                rightMockScreenTranslateYIn: [200, 0, { start: 0.1, end: 0.2 }],

                flowTextOneTranslateYIn: [400, 0, { start: 0.15, end: 0.2 }],
                flowTextOneTranslateYOut: [0, -400, { start: 0.2, end: 0.3 }],

                flowTextTwoTranslateYIn: [400, 0, { start: 0.4, end: 0.5 }],
                flowTextTwoTranslateYOut: [0, -400, { start: 0.5, end: 0.6 }],

                flowTextThreeTranslateYIn: [400, 0, { start: 0.7, end: 0.8 }],
                flowTextThreeTranslateYOut: [0, -400, { start: 0.8, end: 0.9 }],

                rightMockVideoOneOpacityIn: [0, 1, { start: 0.15, end: 0.2 }],
                rightMockVideoOneOpacityOut: [1, 0, { start: 0.2, end: 0.3 }],

                rightMockVideoTwoOpacityIn: [0, 1, { start: 0.4, end: 0.5 }],
                rightMockVideoTwoOpacityOut: [1, 0, { start: 0.5, end: 0.6 }],

                rightMockVideoThreeOpacityIn: [0, 1, { start: 0.7, end: 0.8 }],
                rightMockVideoThreeOpacityOut: [1, 0, { start: 0.8, end: 0.9 }],
            }
        },
        {
            // scroll-section-6
            type: "scroll-anim",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-6"),

                flowTitle: document.querySelector("#scroll-section-6 .flow-title"),

                imageCanvas: document.querySelector("#image-canvas-2"),
                imageCanvasContext: document.querySelector("#image-canvas-2").getContext("2d"),

                imagePaths: [
                    `./img/006/background.jpg`
                ],
                images: []
            },
            values: {
                flowTitleOpacityIn: [0, 1, { start: 0, end: 0 }],
                flowTitleOpacityOut: [1, 0, { start: 0.5, end: 0.5 }],

                flowTitleTranslateYIn: [400, 0, { start: 0, end: 0.3 }],
                flowTitleTranslateYOut: [0, -400, { start: 0.3, end: 0.5 }],

                flowTitleScaleIn: [0.5, 1, { start: 0, end: 0.3 }],

                backgroundImageTranslateYIn: [100, 0, { start: 0.4, end: 0.5 }],
                backgroundImageTranslateYOut: [0, -100, { start: 0.6, end: 0.7 }]
            }
        },
        {
            // scroll-section-7
            type: "scroll-anim",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-7"),

                flowTextOne: document.querySelector("#scroll-section-7 .flow-text.one"),
                flowTextTwo: document.querySelector("#scroll-section-7 .flow-text.two"),
            },
            values: {
                flowTextOneTranslateYIn: [200, 0, { start: 0.3, end: 0.4 }],

                flowTextOneOpacityIn: [0, 1, { start: 0.3, end: 0.4 }],
                flowTextOneOpacityOut: [1, 0, { start: 0.5, end: 0.6 }],

                flowTextTwoTranslateYIn: [200, 0, { start: 0.6, end: 0.7 }],
                flowTextTwoTranslateYOut: [0, -200, { start: 0.8, end: 0.9 }],

                flowTextTwoOpacityIn: [0, 1, { start: 0.6, end: 0.7 }]
            }
        },
        {
            // scroll-section-8
            type: "scroll-anim",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-8"),

            },
            values: {

            }

        },
        {
            // scroll-section-9
            type: "scroll-anim",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-9"),

            },
            values: {

            }
        },
        {
            // scroll-section-10
            type: "scroll-anim",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-10"),

            },
            values: {

            }
        }
    ]

    function scrollToTop() {
        sectionInfo[0].objs.textFirst.style.opacity = 1
        sectionInfo[0].objs.textSecond.style.opacity = 1
        window.scrollTo(0, 0);
    }

    function setLayout() {
        // scrollToTop()

        for (let i = 0; i < sectionInfo.length; i++) {
            sectionInfo[i].scrollHeight = sectionInfo[i].height * window.innerHeight
            sectionInfo[i].objs.container.style.height = `${sectionInfo[i].scrollHeight}px`
        }

        let totalScrollHeight = 0
        for (let i = 0; i < sectionInfo.length; i++) {
            totalScrollHeight += sectionInfo[i].scrollHeight
            if (totalScrollHeight >= pageYOffset) {
                currentScene = i
                break
            }
        }

        document.body.setAttribute('id', `show-scene-${currentSection}`)
        document.body.innerWidth = window.innerWidth

        const heightRatio = window.innerHeight / 1080
        sectionInfo[1].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`
        sectionInfo[2].objs.imageCanvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`
        sectionInfo[4].objs.backgroundVideo.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`

        sectionInfo[2].objs.titleBox.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`
    }

    function setCanvasImages() {
        let imgElem
        for (let i = 0; i < sectionInfo[1].values.videoImageCount; i++) {
            imgElem = new Image()
            imgElem.src = `./video/001/IMG${1001 + i}.jpg`
            sectionInfo[1].objs.videoImages.push(imgElem)
        }
        for (let i = 0; i < sectionInfo[2].objs.stillImagePaths.length; i++) {
            let imgElem = new Image()
            imgElem.src = sectionInfo[2].objs.stillImagePaths[i]
            sectionInfo[2].objs.stillImages.push(imgElem)
        }
        for (let i = 0; i < sectionInfo[6].objs.imagePaths.length; i++) {
            let imgElem = new Image()
            imgElem.src = sectionInfo[6].objs.imagePaths[i]
            sectionInfo[6].objs.images.push(imgElem)
        }
    }

    function scrollLoop() {
        // 현재 보이는 scroll section
        prevScrollHeight = 0
        enterNewScene = false

        for (let i = 0; i < currentSection; i++) {
            prevScrollHeight += sectionInfo[i].scrollHeight
        }

        if (yOffset > prevScrollHeight + sectionInfo[currentSection].scrollHeight) {
            enterNewScene = true
            currentSection++
            document.body.setAttribute('id', `show-scene-${currentSection}`)
        }

        if (yOffset < prevScrollHeight) {
            if (currentSection === 0) return // 브라우저 바운스 효과로 마이너스가 되는 것을 방지
            enterNewScene = true
            currentSection--
            document.body.setAttribute('id', `show-scene-${currentSection}`)
        }

        if (enterNewScene) return

        playAnimation()
    }

    function playAnimation() {
        const objs = sectionInfo[currentSection].objs
        const values = sectionInfo[currentSection].values
        const currentYOffset = yOffset - prevScrollHeight
        const scrollHeight = sectionInfo[currentSection].scrollHeight
        const scrollRatio = currentYOffset / scrollHeight

        switch (currentSection) {
            case 0:
                if (scrollRatio <= 0.6) {
                    objs.textFirst.style.opacity = calcValues(values.textFirst, currentYOffset)
                    objs.textSecond.style.opacity = calcValues(values.textSecond, currentYOffset)
                }
                break

            case 1:
                let sequence = Math.round(calcValues(values.imageSequence, currentYOffset))
                objs.context.drawImage(objs.videoImages[sequence], 0, 0)

                if (scrollRatio <= 0.1) {
                    objs.canvas.style.opacity = calcValues(values.canvasOpacityIn, currentYOffset)
                }

                if (scrollRatio <= 0.18) {
                    // in
                    objs.messageOne.style.opacity = calcValues(values.messageOneOpacityIn, currentYOffset)
                    objs.messageOne.style.transform = `translate3d(0, ${calcValues(values.messageOneTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    // out
                    objs.messageOne.style.opacity = calcValues(values.messageOneOpacityOut, currentYOffset)
                    objs.messageOne.style.transform = `translate3d(0, ${calcValues(values.messageOneTranslateYOut, currentYOffset)}%, 0)`
                }

                if (scrollRatio <= 0.34) {
                    // in
                    objs.messageTwo.style.opacity = calcValues(values.messageTwoOpacityIn, currentYOffset)
                    objs.messageTwo.style.transform = `translate3d(0, ${calcValues(values.messageTwoTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    // out
                    objs.messageTwo.style.opacity = calcValues(values.messageTwoOpacityOut, currentYOffset)
                    objs.messageTwo.style.transform = `translate3d(0, ${calcValues(values.messageTwoTranslateYOut, currentYOffset)}%, 0)`
                }

                if (scrollRatio <= 0.5) {
                    // in
                    objs.messageThree.style.opacity = calcValues(values.messageThreeOpacityIn, currentYOffset)
                    objs.messageThree.style.transform = `translate3d(0, ${calcValues(values.messageThreeTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    // out
                    objs.messageThree.style.opacity = calcValues(values.messageThreeOpacityOut, currentYOffset)
                    objs.messageThree.style.transform = `translate3d(0, ${calcValues(values.messageThreeTranslateYOut, currentYOffset)}%, 0)`
                }

                if (scrollRatio <= 0.65) {
                    // in
                    objs.messageFour.style.opacity = calcValues(values.messageFourOpacityIn, currentYOffset)
                    objs.messageFour.style.transform = `translate3d(0, ${calcValues(values.messageFourTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    // out
                    objs.messageFour.style.opacity = calcValues(values.messageFourOpacityOut, currentYOffset)
                    objs.messageFour.style.transform = `translate3d(0, ${calcValues(values.messageFourTranslateYOut, currentYOffset)}%, 0)`
                }

                if (scrollRatio <= 0.81) {
                    // in
                    objs.messageFive.style.opacity = calcValues(values.messageFiveOpacityIn, currentYOffset)
                    objs.messageFive.style.transform = `translate3d(0, ${calcValues(values.messageFiveTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    // out
                    objs.messageFive.style.opacity = calcValues(values.messageFiveOpacityOut, currentYOffset)
                    objs.messageFive.style.transform = `translate3d(0, ${calcValues(values.messageFiveTranslateYOut, currentYOffset)}%, 0)`
                }

                break

            case 2:
                objs.imageCanvasContext.drawImage(objs.stillImages[0], 0, 0)
                objs.imageCanvas.style.transform = `translate3d(-50%, -50%, 0) scale(${calcValues(values.stillImageHeightIn, currentYOffset)})`
                objs.titleBox.style.transform = `translate3d(-50%, -50%, 0) scale(${350 / 1080})`

                if (scrollRatio >= 0.1) {
                    objs.imageCanvas.style.opacity = calcValues(values.imageCanvasOpacityOut, currentYOffset)
                }

                if (scrollRatio <= 0.5) {
                    objs.titleBox.style.opacity = calcValues(values.titleBoxOpacityIn, currentYOffset)
                    objs.titleBox.style.transform = `translate3d(-50%, ${-50 + calcValues(values.titleBoxTranslateYIn, currentYOffset)}%, 0) scale(${350 / 1080})`
                } else {
                    objs.titleBox.style.opacity = calcValues(values.titleBoxOpacityOut, currentYOffset)
                    objs.titleBox.style.transform = `translate3d(-50%, ${-50 + calcValues(values.titleBoxTranslateYOut, currentYOffset)}%, 0) scale(${350 / 1080})`
                }
                break

            case 3:
                if (scrollRatio <= 0.5) {
                    objs.leftMockScreen.style.opacity = calcValues(values.leftMockScreenOpacityIn, currentYOffset)
                    objs.leftMockScreen.style.transform = `translate3d(0, ${calcValues(values.leftMockScreenTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.leftMockScreen.style.opacity = calcValues(values.leftMockScreenOpacityOut, currentYOffset)
                }

                if (scrollRatio <= 0.2) {
                    objs.flowTextOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYIn, currentYOffset)}%, 0)`
                    objs.leftMockImageOne.style.opacity = calcValues(values.leftMockImageOneOpacityIn, currentYOffset)
                } else {
                    objs.flowTextOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYOut, currentYOffset)}%, 0)`
                    objs.leftMockImageOne.style.opacity = calcValues(values.leftMockImageOneOpacityOut, currentYOffset)
                }

                if (scrollRatio <= 0.5) {
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYIn, currentYOffset)}%, 0)`
                    objs.leftMockImageTwo.style.opacity = calcValues(values.leftMockImageTwoOpacityIn, currentYOffset)
                } else {
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYOut, currentYOffset)}%, 0)`
                    objs.leftMockImageTwo.style.opacity = calcValues(values.leftMockImageTwoOpacityOut, currentYOffset)
                }

                if (scrollRatio <= 0.8) {
                    objs.flowTextThree.style.transform = `translate3d(0, ${calcValues(values.flowTextThreeTranslateYIn, currentYOffset)}%, 0)`
                    objs.leftMockImageThree.style.opacity = calcValues(values.leftMockImageThreeOpacityIn, currentYOffset)
                } else {
                    objs.flowTextThree.style.transform = `translate3d(0, ${calcValues(values.flowTextThreeTranslateYOut, currentYOffset)}%, 0)`
                    objs.leftMockImageThree.style.opacity = calcValues(values.leftMockScreenOpacityOut, currentYOffset)
                }
                break

            case 4:
                if (scrollRatio <= 0.3) {
                    objs.flowTitle.style.opacity = calcValues(values.flowTitleOpacityIn, currentYOffset)
                    objs.flowTitle.style.transform = `translate3d(0, ${calcValues(values.flowTitleTranslateYIn, currentYOffset)}%, 0) scale(${calcValues(values.flowTitleScaleIn, currentYOffset)})`

                } else {
                    objs.flowTitle.style.opacity = calcValues(values.flowTitleOpacityOut, currentYOffset)
                    objs.flowTitle.style.transform = `translate3d(0, ${calcValues(values.flowTitleTranslateYOut, currentYOffset)}%, 0)`
                }

                rangeVideoLoop(0.4, 1, objs.backgroundVideo, scrollRatio)

                if (scrollRatio <= 0.7) {
                    objs.backgroundVideo.style.opacity = calcValues(values.backgroundVideoOpacityIn, currentYOffset)
                    objs.backgroundVideo.style.transform = `translate3d(0, ${calcValues(values.backgroundVideoTranslateYIn, currentYOffset)}%, 0) scale(${calcValues(values.flowTitleScaleIn, currentYOffset)})`
                } else {
                    objs.backgroundVideo.style.opacity = calcValues(values.backgroundVideoOpacityOut, currentYOffset)
                    objs.backgroundVideo.style.transform = `translate3d(0, ${calcValues(values.backgroundVideoTranslateYOut, currentYOffset)}%, 0) scale(${calcValues(values.flowTitleScaleIn, currentYOffset)})`
                }

                break
            case 5:
                if (scrollRatio <= 0.5) {
                    objs.rightMockScreen.style.opacity = calcValues(values.rightMockScreenOpacityIn, currentYOffset)
                    objs.rightMockScreen.style.transform = `translate3d(0, ${calcValues(values.rightMockScreenTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.rightMockScreen.style.opacity = calcValues(values.rightMockScreenOpacityOut, currentYOffset)
                }

                rangeVideoLoop(0.1, 0.35, objs.rightMockVideoOne, scrollRatio)
                rangeVideoLoop(0.35, 0.65, objs.rightMockVideoOne, scrollRatio)
                rangeVideoLoop(0.65, 0.95, objs.rightMockVideoOne, scrollRatio)

                if (scrollRatio <= 0.2) {
                    objs.flowTextOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYIn, currentYOffset)}%, 0)`
                    objs.rightMockVideoOne.style.opacity = calcValues(values.rightMockVideoOneOpacityIn, currentYOffset)
                } else {
                    objs.flowTextOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYOut, currentYOffset)}%, 0)`
                    objs.rightMockVideoOne.style.opacity = calcValues(values.rightMockVideoOneOpacityOut, currentYOffset)
                }

                if (scrollRatio <= 0.5) {
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYIn, currentYOffset)}%, 0)`
                    objs.rightMockVideoTwo.style.opacity = calcValues(values.rightMockVideoTwoOpacityIn, currentYOffset)
                } else {
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYOut, currentYOffset)}%, 0)`
                    objs.rightMockVideoTwo.style.opacity = calcValues(values.rightMockVideoTwoOpacityOut, currentYOffset)
                }

                if (scrollRatio <= 0.8) {
                    objs.flowTextThree.style.transform = `translate3d(0, ${calcValues(values.flowTextThreeTranslateYIn, currentYOffset)}%, 0)`
                    objs.rightMockVideoThree.style.opacity = calcValues(values.rightMockVideoThreeOpacityIn, currentYOffset)
                } else {
                    objs.flowTextThree.style.transform = `translate3d(0, ${calcValues(values.flowTextThreeTranslateYOut, currentYOffset)}%, 0)`
                    objs.rightMockVideoThree.style.opacity = calcValues(values.rightMockVideoThreeOpacityOut, currentYOffset)
                }
                break

            case 6:
                const widthRatio = window.innerWidth / objs.imageCanvas.width
                const heightRatio = window.innerHeight / objs.imageCanvas.height
                let canvasScaleRatio;

                if (widthRatio <= heightRatio) {
                    canvasScaleRatio = heightRatio
                } else {
                    canvasScaleRatio = widthRatio
                }

                if (scrollRatio <= 0.3) {
                    objs.flowTitle.style.opacity = calcValues(values.flowTitleOpacityIn, currentYOffset)
                    objs.flowTitle.style.transform = `translate3d(0, ${calcValues(values.flowTitleTranslateYIn, currentYOffset)}%, 0) scale(${calcValues(values.flowTitleScaleIn, currentYOffset)})`
                } else {
                    objs.flowTitle.style.opacity = calcValues(values.flowTitleOpacityOut, currentYOffset)
                    objs.flowTitle.style.transform = `translate3d(0, ${calcValues(values.flowTitleTranslateYOut, currentYOffset)}%, 0)`
                }

                if (scrollRatio >= 0.4 && scrollRatio < 0.55) {
                    objs.imageCanvas.style.transform = `translate3d(-50%, ${-50 + calcValues(values.backgroundImageTranslateYIn, currentYOffset)}%, 0) scale(${canvasScaleRatio})`
                    objs.imageCanvasContext.drawImage(objs.images[0], 0, 0)
                } else if (scrollRatio > 0.55 && scrollRatio <= 0.7) {
                    objs.imageCanvas.style.transform = `translate3d(-50%, ${-50 + calcValues(values.backgroundImageTranslateYOut, currentYOffset)}%, 0) scale(${canvasScaleRatio})`
                    objs.imageCanvasContext.drawImage(objs.images[0], 0, 0)
                }

                break

            case 7:
                if (scrollRatio < 0.45) {
                    objs.flowTextOne.style.opacity = calcValues(values.flowTextOneOpacityIn, currentYOffset)
                    objs.flowTextOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.flowTextOne.style.opacity = calcValues(values.flowTextOneOpacityOut, currentYOffset)
                }

                if (scrollRatio < 0.75) {
                    objs.flowTextTwo.style.opacity = calcValues(values.flowTextTwoOpacityIn, currentYOffset)
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYOut, currentYOffset)}%, 0)`
                }
            
                break
        }
    }

    function rangeVideoLoop(rangeStart, rangeEnd, video, scrollRatio) {
        if (rangeStart <= scrollRatio && scrollRatio < rangeStart + 0.02) {
            if (scrollDirectionUp) {
                video.pause()
                video.currentTime = 0
            } else {
                video.play()
            }
        }

        if (rangeEnd - 0.02 <= scrollRatio && scrollRatio < rangeEnd) {
            if (scrollDirectionUp) {
                video.play()
            } else {
                video.pause()
                video.currentTime = 0
            }
        }
    }

    function calcValues(values, currentYOffset) {
        const scrollHeight = sectionInfo[currentSection].scrollHeight
        const scrollRatio = currentYOffset / scrollHeight

        let rv
        if (values.length === 3) {
            const elemScrollStart = values[2].start * scrollHeight
            const elemScrollEnd = values[2].end * scrollHeight
            const elemScrollHeight = elemScrollEnd - elemScrollStart
            const elemScrollRatio = (currentYOffset - elemScrollStart) / elemScrollHeight

            if (currentYOffset >= elemScrollStart && currentYOffset <= elemScrollEnd) {
                rv = elemScrollRatio * (values[1] - values[0]) + values[0]
            } else if (currentYOffset < elemScrollStart) {
                rv = values[0]
            } else if (currentYOffset > elemScrollEnd) {
                rv = values[1]
            }

        } else {
            rv = scrollRatio * (values[1] - values[0]) + values[0]
        }

        return rv
    }

    setCanvasImages()
    window.addEventListener('load', setLayout)
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset
        scrollLoop()
    })
    window.addEventListener('resize', setLayout)
    window.onscroll = function (e) {
        scrollDirectionUp = this.oldScroll > this.scrollY
        this.oldScroll = this.scrollY
    }
})()
