(() => {

    let yOffset = 0
    let totalYOffset = 0
    let prevScrollHeight = 0
    let currentSection = 0
    let enterNewScene = false
    let scrollDirectionUp = null

    const indicatorProgress = document.querySelector("#indicator-progress")

    const sectionInfo = [
        {
            // scroll-section-0
            type: "scroll-anim",
            height: 1,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-0"),

                backgroundImageRight: document.querySelector("#scroll-section-0 .background-image.right"),
                backgroundImageLeft: document.querySelector("#scroll-section-0 .background-image.left"),

                mainPageTitle: document.querySelector("#scroll-section-0 .main-page-title"),
                mainPageFooter: document.querySelector("#scroll-section-0 .main-page-footer"),
            },
            values: {
                backgroundImageRightTranslateXOut: [0, 200, { start: 0.15, end: 0.4 }],
                backgroundImageLeftTranslateXOut: [0, -200, { start: 0.15, end: 0.4 }],
                backgroundImageOpacityOut: [0.45, 0, { start: 0.15, end: 0.4 }],

                mainPageTitleOpacityOut: [1, 0, { start: 0.15, end: 0.4 }]
            }
        },
        {
            // scroll-section-1
            type: "scroll-anim",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-1"),
                canvas: document.querySelector("#video-canvas-1"),
                context: document.querySelector("#video-canvas-1").getContext("2d"),
                titleBox: document.querySelector("#scroll-section-1 .title-box"),
                videoImages: [],
            },
            values: {
                videoImageCount: 433,
                imageSequence: [0, 432],

                canvasOpacityIn: [0, 1, { start: 0, end: 0.2 }],
                canvasOpacityOut: [1, 0, { start: 0.9, end: 1 }],

                titleBoxOpacityIn: [0, 1, { start: 0.75, end: 0.85 }],
                titleBoxOpacityOut: [1, 0, { start: 0.9, end: 1 }],
                titleBoxTranslateYIn: [300, 0, { start: 0.75, end: 0.85 }],
                titleBoxTranslateYOut: [0, -300, { start: 0.9, end: 1 }],

                canvasHeightIn: [0, 350 / 1080, { start: 0.75, end: 0.85 }]
            }
        },
        {
            // scroll-section-2
            type: "scroll-anim",
            height: 0,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-2"),
            },
            values: {
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
                leftMockScreenOpacityIn: [0, 1, { start: 0, end: 0.1 }],
                leftMockScreenOpacityOut: [1, 0, { start: 0.9, end: 1 }],
                leftMockScreenTranslateYIn: [200, 0, { start: 0, end: 0.1 }],

                flowTextOneTranslateYIn: [400, 0, { start: 0, end: 0.1 }],
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

                backgroundVideoOpacityIn: [0, 1, { start: 0.4, end: 0.5 }],
                backgroundVideoOpacityOut: [1, 0, { start: 0.8, end: 0.9 }],

                backgroundVideoTranslateYIn: [100, 0, { start: 0.4, end: 0.5 }],
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

            },
            values: {

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
            height: 8,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-9"),

                flowTextOne: document.querySelector("#scroll-section-9 .flow-text.one"),
                flowTextTwo: document.querySelector("#scroll-section-9 .flow-text.two"),

                backgroundVideoOne: document.querySelector("#scroll-section-9 .full-video.one"),
                backgroundVideoTwo: document.querySelector("#scroll-section-9 .full-video.two"),
                backgroundVideoThree: document.querySelector("#scroll-section-9 .full-video.three"),

                imageCanvas: document.querySelector("#image-canvas-3"),
                imageCanvasContext: document.querySelector("#image-canvas-3").getContext("2d"),

                imagePaths: [
                    `./img/009/chill_mockup.png`
                ],
                images: [],

                flowTitleThree: document.querySelector("#scroll-section-9 .screen-title.three"),
                flowFooterThree: document.querySelector("#scroll-section-9 .screen-footer.three"),

            },
            values: {
                flowTextOneTranslateYIn: [200, 0, { start: 0.1, end: 0.2 }],
                flowTextOneOpacityIn: [0, 1, { start: 0.1, end: 0.2 }],

                flowTextOneTranslateYOut: [0, -200, { start: 0.25, end: 0.35 }],
                flowTextOneOpacityOut: [1, 0, { start: 0.25, end: 0.35 }],

                flowTextTwoTranslateYIn: [200, 0, { start: 0.4, end: 0.5 }],
                flowTextTwoOpacityIn: [0, 1, { start: 0.4, end: 0.5 }],

                flowTextTwoTranslateYOut: [0, -200, { start: 0.55, end: 0.65 }],
                flowTextTwoOpacityOut: [1, 0, { start: 0.55, end: 0.65 }],

                backgroundImageTranslateYIn: [100, 0, { start: 0.65, end: 0.75 }],
                backgroundImageTranslateYOut: [0, -100, { start: 0.8, end: 0.85 }],

                flowThreeTranslateYIn: [50, 0, { start: 0.85, end: 0.9 }],
                flowThreeOpacityIn: [0, 1, { start: 0.85, end: 0.9 }],

                flowThreeTranslateYOut: [0, -50, { start: 0.95, end: 1 }],
                flowThreeOpacityOut: [1, 0, { start: 0.95, end: 1 }],
            }
        },
        {
            // scroll-section-10
            type: "scroll-anim",
            height: 2,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-10"),

                imageCanvas: document.querySelector("#image-canvas-4"),
                imageCanvasContext: document.querySelector("#image-canvas-4").getContext("2d"),

                imagePaths: [
                    `./img/010/all_mockup_full.png`
                ],
                images: []
            },
            values: {
                backgroundImageTranslateYIn: [100, 0, { start: 0.1, end: 0.3 }],
                backgroundImageTranslateYOut: [0, -100, { start: 0.7, end: 0.9 }],
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

        for (let i = 0; i < sectionInfo.length; i++) {
            totalYOffset += sectionInfo[i].scrollHeight
        }

        document.body.setAttribute('id', `show-scene-${currentSection}`)
        document.body.innerWidth = window.innerWidth

        const heightRatio = window.innerHeight / 1080
        sectionInfo[1].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`
        sectionInfo[4].objs.backgroundVideo.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`
        sectionInfo[1].objs.titleBox.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`
    }

    function setCanvasImages() {
        let imgElem
        for (let i = 0; i < sectionInfo[1].values.videoImageCount; i++) {
            imgElem = new Image()
            imgElem.src = `./video/001/IMG${1001 + i}.jpg`
            sectionInfo[1].objs.videoImages.push(imgElem)
        }
        for (let i = 0; i < sectionInfo[6].objs.imagePaths.length; i++) {
            let imgElem = new Image()
            imgElem.src = sectionInfo[6].objs.imagePaths[i]
            sectionInfo[6].objs.images.push(imgElem)
        }
        for (let i = 0; i < sectionInfo[9].objs.imagePaths.length; i++) {
            let imgElem = new Image()
            imgElem.src = sectionInfo[9].objs.imagePaths[i]
            sectionInfo[9].objs.images.push(imgElem)
        }
        for (let i = 0; i < sectionInfo[10].objs.imagePaths.length; i++) {
            let imgElem = new Image()
            imgElem.src = sectionInfo[10].objs.imagePaths[i]
            sectionInfo[10].objs.images.push(imgElem)
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
                if (scrollRatio < 0.5) {
                    objs.backgroundImageLeft.style.transform = `translate3d(${calcValues(values.backgroundImageLeftTranslateXOut, currentYOffset)}%, 0, 0)`
                    objs.backgroundImageRight.style.transform = `translate3d(${calcValues(values.backgroundImageRightTranslateXOut, currentYOffset)}%, 0, 0)`
                    objs.backgroundImageLeft.style.opacity = calcValues(values.backgroundImageOpacityOut, currentYOffset)
                    objs.mainPageTitle.style.opacity = calcValues(values.mainPageTitleOpacityOut, currentYOffset)
                    objs.mainPageFooter.style.opacity = calcValues(values.mainPageTitleOpacityOut, currentYOffset)
                }
                break

            case 1:
                let sequence = Math.round(calcValues(values.imageSequence, currentYOffset))
                objs.context.drawImage(objs.videoImages[sequence], 0, 0)

                if (scrollRatio < 0.5) {
                    objs.canvas.style.opacity = calcValues(values.canvasOpacityIn, currentYOffset)
                } else {
                    objs.canvas.style.opacity = calcValues(values.canvasOpacityOut, currentYOffset)
                }

                if (sequence > 325) {
                    if (scrollRatio < 0.875) {
                        objs.titleBox.style.opacity = calcValues(values.titleBoxOpacityIn, currentYOffset)
                        objs.titleBox.style.transform = `translate3d(-50%, ${-50 + calcValues(values.titleBoxTranslateYIn, currentYOffset)}%, 0) scale(${350 / 1080})`
                    } else {
                        objs.titleBox.style.opacity = calcValues(values.titleBoxOpacityOut, currentYOffset)
                        objs.titleBox.style.transform = `translate3d(-50%, ${-50 + calcValues(values.titleBoxTranslateYOut, currentYOffset)}%, 0) scale(${350 / 1080})`
                        objs.canvas.style.transform = `translate3d(-50%, ${-50 + calcValues(values.titleBoxTranslateYOut, currentYOffset)}%, 0) scale(${350 / 1080})`
                    }
                }
                break

            case 2:
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

                rangeVideoLoop(0.3, 1, objs.backgroundVideo, scrollRatio)

                if (scrollRatio <= 0.7) {
                    objs.backgroundVideo.style.opacity = calcValues(values.backgroundVideoOpacityIn, currentYOffset)
                    objs.backgroundVideo.style.transform = `translate3d(0, ${calcValues(values.backgroundVideoTranslateYIn, currentYOffset)}%, 0) scale(${calcValues(values.flowTitleScaleIn, currentYOffset)})`
                } else {
                    objs.backgroundVideo.style.opacity = calcValues(values.backgroundVideoOpacityOut, currentYOffset)
                    objs.backgroundVideo.style.transform = `translate3d(0, ${calcValues(values.backgroundVideoTranslateYOut, currentYOffset)}%, 0) scale(${calcValues(values.flowTitleScaleIn, currentYOffset)})`
                }

                break
            case 5:
                
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

            case 9:
                rangeVideoLoop(0.1, 0.35, objs.backgroundVideoOne, scrollRatio)
                rangeVideoLoop(0.4, 0.65, objs.backgroundVideoTwo, scrollRatio)
                rangeVideoLoop(0.85, 1, objs.backgroundVideoThree, scrollRatio)

                if (scrollRatio < 0.225) {
                    objs.flowTextOne.style.opacity = calcValues(values.flowTextOneOpacityIn, currentYOffset)
                    objs.flowTextOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYIn, currentYOffset)}%, 0)`
                    objs.backgroundVideoOne.style.opacity = calcValues(values.flowTextOneOpacityIn, currentYOffset)
                    objs.backgroundVideoOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.flowTextOne.style.opacity = calcValues(values.flowTextOneOpacityOut, currentYOffset)
                    objs.flowTextOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYOut, currentYOffset)}%, 0)`
                    objs.backgroundVideoOne.style.opacity = calcValues(values.flowTextOneOpacityOut, currentYOffset)
                    objs.backgroundVideoOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYOut, currentYOffset)}%, 0)`
                }

                if (scrollRatio < 0.525) {
                    objs.flowTextTwo.style.opacity = calcValues(values.flowTextTwoOpacityIn, currentYOffset)
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYIn, currentYOffset)}%, 0)`
                    objs.backgroundVideoTwo.style.opacity = calcValues(values.flowTextTwoOpacityIn, currentYOffset)
                    objs.backgroundVideoTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.flowTextTwo.style.opacity = calcValues(values.flowTextTwoOpacityOut, currentYOffset)
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYOut, currentYOffset)}%, 0)`
                    objs.backgroundVideoTwo.style.opacity = calcValues(values.flowTextTwoOpacityOut, currentYOffset)
                    objs.backgroundVideoTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYOut, currentYOffset)}%, 0)`
                }

                if (scrollRatio < 0.775) {
                    objs.imageCanvas.style.transform = `translate3d(-50%, ${-50 + calcValues(values.backgroundImageTranslateYIn, currentYOffset)}%, 0) scale(${calculateCanvasSacleRatio(objs)})`
                    objs.imageCanvasContext.drawImage(objs.images[0], 0, 0)
                } else {
                    objs.imageCanvas.style.transform = `translate3d(-50%, ${-50 + calcValues(values.backgroundImageTranslateYOut, currentYOffset)}%, 0) scale(${calculateCanvasSacleRatio(objs)})`
                    objs.imageCanvasContext.drawImage(objs.images[0], 0, 0)
                }

                if (scrollRatio < 0.925) {
                    objs.flowTitleThree.style.opacity = calcValues(values.flowThreeOpacityIn, currentYOffset)
                    objs.flowTitleThree.style.transform = `translate3d(0, ${calcValues(values.flowThreeTranslateYIn, currentYOffset)}%, 0)`
                    objs.flowFooterThree.style.opacity = calcValues(values.flowThreeOpacityIn, currentYOffset)
                    objs.flowFooterThree.style.transform = `translate3d(0, ${calcValues(values.flowThreeTranslateYIn, currentYOffset)}%, 0)`
                    objs.backgroundVideoThree.style.opacity = calcValues(values.flowThreeOpacityIn, currentYOffset)
                    objs.backgroundVideoThree.style.transform = `translate3d(0, ${calcValues(values.flowThreeTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.flowTitleThree.style.opacity = calcValues(values.flowThreeOpacityOut, currentYOffset)
                    objs.flowTitleThree.style.transform = `translate3d(0, ${calcValues(values.flowThreeTranslateYOut, currentYOffset)}%, 0)`
                    objs.flowFooterThree.style.opacity = calcValues(values.flowThreeOpacityOut, currentYOffset)
                    objs.flowFooterThree.style.transform = `translate3d(0, ${calcValues(values.flowThreeTranslateYOut, currentYOffset)}%, 0)`
                    objs.backgroundVideoThree.style.opacity = calcValues(values.flowThreeOpacityOut, currentYOffset)
                    objs.backgroundVideoThree.style.transform = `translate3d(0, ${calcValues(values.flowThreeTranslateYOut, currentYOffset)}%, 0)`
                }

                break

            case 10:
                if (scrollRatio < 0.5) {
                    objs.imageCanvas.style.transform = `translate3d(-50%, ${-50 + calcValues(values.backgroundImageTranslateYIn, currentYOffset)}%, 0) scale(${calculateCanvasSacleRatio(objs)})`
                    objs.imageCanvasContext.drawImage(objs.images[0], 0, 0)
                } else {
                    objs.imageCanvas.style.transform = `translate3d(-50%, ${-50 + calcValues(values.backgroundImageTranslateYOut, currentYOffset)}%, 0) scale(${calculateCanvasSacleRatio(objs)})`
                    objs.imageCanvasContext.drawImage(objs.images[0], 0, 0)
                }
                break
        }
    }

    function calculateCanvasSacleRatio(objs) {
        const widthRatio = window.innerWidth / objs.imageCanvas.width
        const heightRatio = window.innerHeight / objs.imageCanvas.height
        let canvasScaleRatio

        if (widthRatio <= heightRatio) {
            canvasScaleRatio = heightRatio
        } else {
            canvasScaleRatio = widthRatio
        }

        return canvasScaleRatio
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

    function setScrollIndicatorWidth() {
        indicatorProgress.style.width = `${((yOffset + window.innerHeight) / totalYOffset) * 100}%`
    }

    setCanvasImages()
    window.addEventListener('load', () => {
        setLayout()
        setScrollIndicatorWidth()
    })
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset
        scrollLoop()
        setScrollIndicatorWidth()
    })
    window.addEventListener('resize', () => {
        setLayout()
        setScrollIndicatorWidth()
    })
    window.onscroll = function (e) {
        scrollDirectionUp = this.oldScroll > this.scrollY
        this.oldScroll = this.scrollY
    }
})()
