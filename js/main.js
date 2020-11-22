(() => {

    let yOffset = 0
    let prevScrollHeight = 0
    let currentSection = 0
    let enterNewScene = false

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
                imageCanvasImage: null
            },
            values: {
                titleBoxOpacityIn: [0, 1, { start: 0.1, end: 0.1 }],
                titleBoxOpacityOut: [1, 0, { start: 0.9, end: 0.9 }],
                titleBoxTranslateYIn: [200, 0, { start: 0.1, end: 0.4 }],
                titleBoxTranslateYOut: [0, -200, { start: 0.7, end: 0.9 }],

                imageCanvasOpacityOut: [1, 0, { start: 0.4, end: 0.7 }]
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
            }
        },
        {
            // scroll-section-4
            type: "scroll-anim",
            height: 3,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-4"),

                flowTitle: document.querySelector("#scroll-section-4 .flow-title")
            },
            values: {
                flowTitleOpacityIn: [0, 1, { start: 0, end: 0 }],
                flowTitleOpacityOut: [1, 0, { start: 0.5, end: 0.5 }],

                flowTitleTranslateYIn: [400, 0, { start: 0, end: 0.3 }],
                flowTitleTranslateYOut: [0, -400, { start: 0.3, end: 0.5 }],

                flowTitleScaleIn: [0.5, 1, { start: 0, end: 0.3 }],
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
                flowTextThree: document.querySelector("#scroll-section-5 .flow-text.three")
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
            }
        },
        {
            // scroll-section-6
            type: "scroll-anim",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-6"),

                flowTitle: document.querySelector("#scroll-section-6 .flow-title")
            },
            values: {
                flowTitleOpacityIn: [0, 1, { start: 0, end: 0 }],
                flowTitleOpacityOut: [1, 0, { start: 0.5, end: 0.5 }],

                flowTitleTranslateYIn: [400, 0, { start: 0, end: 0.3 }],
                flowTitleTranslateYOut: [0, -400, { start: 0.3, end: 0.5 }],

                flowTitleScaleIn: [0.5, 1, { start: 0, end: 0.3 }],
            }
        },
    ]

    function setLayout() {
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

        const heightRatio = window.innerHeight / 1080
        sectionInfo[1].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`
        sectionInfo[2].objs.imageCanvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`
    }

    function setCanvasImages() {
        let imgElem
        for (let i = 0; i < sectionInfo[1].values.videoImageCount; i++) {
            imgElem = new Image()
            imgElem.src = `./video/001/IMG${1001 + i}.jpg`
            sectionInfo[1].objs.videoImages.push(imgElem)
        }

        imgElem = new Image()
        imgElem.src = `./video/001/IMG1338.jpg`
        sectionInfo[2].objs.imageCanvasImage = imgElem
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
                objs.imageCanvasContext.drawImage(objs.imageCanvasImage, 0, 0)

                if (scrollRatio >= 0.1) {
                    objs.imageCanvas.style.opacity = calcValues(values.imageCanvasOpacityOut, currentYOffset)
                }

                if (scrollRatio <= 0.5) {
                    objs.titleBox.style.opacity = calcValues(values.titleBoxOpacityIn, currentYOffset)
                    objs.titleBox.style.transform = `translate3d(0, ${calcValues(values.titleBoxTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.titleBox.style.opacity = calcValues(values.titleBoxOpacityOut, currentYOffset)
                    objs.titleBox.style.transform = `translate3d(0, ${calcValues(values.titleBoxTranslateYOut, currentYOffset)}%, 0)`
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
                } else {
                    objs.flowTextOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYOut, currentYOffset)}%, 0)`
                }

                if (scrollRatio <= 0.5) {
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYOut, currentYOffset)}%, 0)`
                }

                if (scrollRatio <= 0.8) {
                    objs.flowTextThree.style.transform = `translate3d(0, ${calcValues(values.flowTextThreeTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.flowTextThree.style.transform = `translate3d(0, ${calcValues(values.flowTextThreeTranslateYOut, currentYOffset)}%, 0)`
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

                break
            case 5:
                console.log(objs.flowTextOne)
                if (scrollRatio <= 0.5) {
                    objs.rightMockScreen.style.opacity = calcValues(values.rightMockScreenOpacityIn, currentYOffset)
                    objs.rightMockScreen.style.transform = `translate3d(0, ${calcValues(values.rightMockScreenTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.rightMockScreen.style.opacity = calcValues(values.rightMockScreenOpacityOut, currentYOffset)
                }

                if (scrollRatio <= 0.2) {
                    objs.flowTextOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.flowTextOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYOut, currentYOffset)}%, 0)`
                }

                if (scrollRatio <= 0.5) {
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYOut, currentYOffset)}%, 0)`
                }

                if (scrollRatio <= 0.8) {
                    objs.flowTextThree.style.transform = `translate3d(0, ${calcValues(values.flowTextThreeTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.flowTextThree.style.transform = `translate3d(0, ${calcValues(values.flowTextThreeTranslateYOut, currentYOffset)}%, 0)`
                }
                break

            case 6:
                if (scrollRatio <= 0.3) {
                    objs.flowTitle.style.opacity = calcValues(values.flowTitleOpacityIn, currentYOffset)
                    objs.flowTitle.style.transform = `translate3d(0, ${calcValues(values.flowTitleTranslateYIn, currentYOffset)}%, 0) scale(${calcValues(values.flowTitleScaleIn, currentYOffset)})`
                } else {
                    objs.flowTitle.style.opacity = calcValues(values.flowTitleOpacityOut, currentYOffset)
                    objs.flowTitle.style.transform = `translate3d(0, ${calcValues(values.flowTitleTranslateYOut, currentYOffset)}%, 0)`
                }
                break
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
})()
