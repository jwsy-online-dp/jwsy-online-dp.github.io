(() => {

    let yOffset = 0
    let totalYOffset = 0
    let prevScrollHeight = 0
    let currentSection = 0
    let enterNewScene = false
    let scrollDirectionUp = null

    let screenRatio

    if (window.innerWidth > window.innerHeight) {
        screenRatio = window.innerHeight / 1080
    } else {
        screenRatio = window.innerWidth / 1920
    }

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
            height: 4,
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

                canvasHeightIn: [screenRatio, 350 / 1080, { start: 0.75, end: 0.85 }]
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

                leftMockImageOneOpacityIn: [0, 1, { start: 0.0, end: 0.1 }],
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
            height: 3,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-5"),

                tripleLeft: document.querySelector("#scroll-section-5 .triple-left"),
                tripleCenter: document.querySelector("#scroll-section-5 .triple-center"),
                tripleRight: document.querySelector("#scroll-section-5 .triple-right"),

                tripleWrapper: document.querySelector("#scroll-section-5 .triple-wrapper"),

                scrollMainMessage: document.querySelector("#scroll-section-6 .scroll-main-message")
            },
            values: {
                tripleLeftTranslateYIn: [200, 0, { start: 0.85, end: 0.95 }],
                tripleLeftOpacityIn: [0, 1, { start: 0.85, end: 0.95 }],

                tripleLeftTranslateYIn1: [0, 0, { start: 0, end: 0.5 }],
                tripleLeftOpacityIn1: [1, 1, { start: 0, end: 0.5 }],

                tripleCenterTranslateYIn: [200, 0, { start: 0.05, end: 0.15 }],
                tripleCenterOpacityIn: [0, 1, { start: 0.05, end: 0.15 }],

                tripleRightTranslateYIn: [200, 0, { start: 0.35, end: 0.45 }],
                tripleRightOpacityIn: [0, 1, { start: 0.35, end: 0.45 }],

                tripleTranslateYOut: [0, -200, { start: 0.5, end: 0.9 }],
                tripleOpacityOut: [1, 0, { start: 0.5, end: 0.9 }],

                scrollMainMessageScaleIn: [0.5, 1, { start: 0.8, end: 0.9 }],
            }
        },
        {
            // scroll-section-6
            type: "normal",
            height: 1,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-6"),

                scrollMainMessage: document.querySelector("#scroll-section-6 .scroll-main-message"),
                scrollBackgroundImage: document.querySelector("#scroll-section-6 .scroll-background-image"),

                scrollWrapperAreaOne: document.querySelector("#scroll-section-7 .scroll-area-wrapper.one"),
            },
            values: {
                backgroundImageStartRatio: 0,
                backgroundImageFixed: [0, 0, { start: 0, end: 0 }],

                scrollWrapperAreaOneOpacityIn: [0, 1, { start: 0.6, end: 1 }]
            }
        },
        {
            // scroll-section-7
            type: "normal",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-7"),

                videoOne: document.querySelector("#video-one"),
                videoTwo: document.querySelector("#video-two"),
                videoThree: document.querySelector("#video-three"),

                scrollWrapperAreaOne: document.querySelector("#scroll-section-7 .scroll-area-wrapper.one"),
                scrollWrapperAreaTwo: document.querySelector("#scroll-section-7 .scroll-area-wrapper.two"),
                scrollWrapperAreaThree: document.querySelector("#scroll-section-7 .scroll-area-wrapper.three")
            },
            values: {
                scrollWrapperAreaOneOpacityOut: [1, 0, { start: 0, end: 0.2 }],
                scrollWrapperAreaTwoOpacityIn: [0, 1, { start: 0.1, end: 0.35 }],
                scrollWrapperAreaTwoOpacityOut: [1, 0, { start: 0.35, end: 0.62 }],
                scrollWrapperAreaThreeOpacityIn: [0, 1, { start: 0.35, end: 0.62 }],
                scrollWrapperAreaThreeOpacityOut: [1, 0, { start: 0.62, end: 0.92 }],
            }
        },
        {
            // scroll-section-8
            type: "scroll-anim",
            height: 2,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-8"),

                canvas: document.querySelector("#background-canvas"),
                context: document.querySelector("#background-canvas").getContext("2d"),

                screenTitle: document.querySelector("#scroll-section-8 .screen-title"),
                screenFooter: document.querySelector("#scroll-section-8 .screen-footer"),

                centerImageLight: document.querySelector("#scroll-section-8 .center-fixed-images.light"),
                centerImageDark: document.querySelector("#scroll-section-8 .center-fixed-images.dark"),

                imagePaths: [
                    `./img/white.jpg`,
                    `./img/black.jpg`
                ],
                images: [],
            },
            values: {
                canvasTranslateYIn: [200, 0, { start: 0.67, end: 1 }],

                blendHeight: [0, 0, { start: 0.5, end: 1 }],

                screentTitleTranslateYIn: [100, 0, { start: 0.2, end: 0.3 }],
                centerImageLightTranslateYIn: [300, 0, { start: 0.01, end: 0.3 }],
                lightPartOpacityIn: [0, 1, { start: 0.1, end: 0.3 }],

                screentTitleTranslateYOut: [0, -100, { start: 0.4, end: 0.5 }],
                centerImageLightOpacityOut: [1, 0, { start: 0.4, end: 0.75 }],

                screenFooterTranslateYIn: [-30, 0, { start: 0.4, end: 0.75 }],
                screenFooterOpacityIn: [0, 1, { start: 0.4, end: 0.75 }],
                centerImageDarkOpacityIn: [0, 1, { start: 0.4, end: 0.75 }],

                screenFooterTranslateYOut: [0, 80, { start: 0.85, end: 1 }],
                screenFooterOpacityOut: [1, 0, { start: 0.85, end: 1 }],
                centerImageDarkTranslateYOut: [0, -200, { start: 0.85, end: 1 }],
                centerImageDarkOpacityOut: [1, 0, { start: 0.85, end: 1 }],
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

                canvasMiddleTitle: document.querySelector("#scroll-section-9 .canvas-middle-title"),

                flowTitleThree: document.querySelector("#scroll-section-9 .screen-title.three"),
                flowFooterThree: document.querySelector("#scroll-section-9 .screen-footer.three"),
            },
            values: {
                flowTextOneTranslateYIn1: [200, 0, { start: 0.01, end: 0.06 }],
                flowTextOneOpacityIn1: [0, 1, { start: 0.01, end: 0.06 }],

                flowTextOneTranslateYOut1: [0, -200, { start: 0.11, end: 0.17 }],
                flowTextOneOpacityOut1: [1, 0, { start: 0.11, end: 0.17 }],

                flowTextTwoTranslateYIn1: [200, 0, { start: 0.23, end: 0.29 }],
                flowTextTwoOpacityIn1: [0, 1, { start: 0.23, end: 0.29 }],

                flowTextTwoTranslateYOut1: [0, -200, { start: 0.35, end: 0.41 }],
                flowTextTwoOpacityOut1: [1, 0, { start: 0.35, end: 0.41 }],

                flowThreeTranslateYIn1: [50, 0, { start: 0.47, end: 0.53 }],
                flowThreeOpacityIn1: [0, 1, { start: 0.47, end: 0.53 }],

                flowThreeTranslateYOut1: [0, -50, { start: 0.59, end: 0.65 }],
                flowThreeOpacityOut1: [1, 0, { start: 0.59, end: 0.65 }],

                backgroundImageTranslateYIn1: [100, 0, { start: 0.65, end: 0.75 }],
                backgroundImageTranslateYOut1: [0, -100, { start: 0.8, end: 0.9 }],
            }
        },
        {
            // scroll-section-10
            type: "normal",
            height: 1,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-10"),
            },
            values: {
            }
        },
        {
            // scroll-section-11
            type: "normal",
            height: 1,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-11"),

                realLastWrapper: document.querySelector("#scroll-section-11 .real-last-wrapper"),
            },
            values: {
            }
        },
        {
            // scroll-section-12
            type: "normal",
            height: 1,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-12"),
            },
            values: {

            }
        }
    ]

    function setLayout() {

        document.querySelector("#scroll-section-6 .scroll-background-wrapper").style.height = `${window.innerHeight}px`
        document.querySelector("#scroll-section-7 .scroll-area-wrapper.one").style.height = `${window.innerHeight}px`
        document.querySelector("#scroll-section-7 .scroll-area-wrapper.two").style.height = `${window.innerHeight}px`
        document.querySelector("#scroll-section-7 .scroll-area-wrapper.three").style.height = `${window.innerHeight}px`

        for (let i = 0; i < sectionInfo.length; i++) {
            if (sectionInfo[i].type === 'scroll-anim') {
                sectionInfo[i].scrollHeight = sectionInfo[i].height * window.innerHeight
            } else if (sectionInfo[i].type === 'normal') {
                sectionInfo[i].scrollHeight = sectionInfo[i].objs.container.offsetHeight
            }

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

        // const heightRatio = window.innerHeight / 1080
        sectionInfo[1].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${screenRatio})`
        sectionInfo[4].objs.backgroundVideo.style.transform = `translate3d(-50%, -50%, 0) scale(${screenRatio})`
        sectionInfo[1].objs.titleBox.style.transform = `translate3d(-50%, -50%, 0) scale(${screenRatio})`
    }

    function setCanvasImages() {
        let imgElem
        for (let i = 0; i < sectionInfo[1].values.videoImageCount; i++) {
            imgElem = new Image()
            imgElem.src = `./video/001/IMG${1001 + i}.jpg`
            sectionInfo[1].objs.videoImages.push(imgElem)
        }
        for (let i = 0; i < sectionInfo[8].objs.imagePaths.length; i++) {
            let imgElem = new Image()
            imgElem.src = sectionInfo[8].objs.imagePaths[i]
            sectionInfo[8].objs.images.push(imgElem)
        }
        for (let i = 0; i < sectionInfo[9].objs.imagePaths.length; i++) {
            let imgElem = new Image()
            imgElem.src = sectionInfo[9].objs.imagePaths[i]
            sectionInfo[9].objs.images.push(imgElem)
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
                    objs.backgroundImageLeft.style.transform = `translate3d(${calcValues(values.backgroundImageLeftTranslateXOut, currentYOffset)}vh, 0, 0)`
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

                // if (sequence > 325) {
                    if (scrollRatio < 0.775) {
                        objs.titleBox.style.opacity = calcValues(values.titleBoxOpacityIn, currentYOffset)
                        objs.titleBox.style.transform = `translate3d(-50%, ${-50 + calcValues(values.titleBoxTranslateYIn, currentYOffset)}%, 0) scale(${350 / 1080})`
                        objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${calcValues(values.canvasHeightIn, currentYOffset)})`
                    } else {
                        objs.titleBox.style.opacity = calcValues(values.titleBoxOpacityOut, currentYOffset)
                        objs.titleBox.style.transform = `translate3d(-50%, ${-50 + calcValues(values.titleBoxTranslateYOut, currentYOffset)}%, 0) scale(${350 / 1080})`
                        objs.canvas.style.transform = `translate3d(-50%, ${-50 + calcValues(values.titleBoxTranslateYOut, currentYOffset)}%, 0)  scale(${calcValues(values.canvasHeightIn, currentYOffset)})`
                    }
                // }
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

                rangeVideoLoop(0.4, 0.9, objs.backgroundVideo, scrollRatio)

                if (scrollRatio <= 0.7) {
                    objs.backgroundVideo.style.opacity = calcValues(values.backgroundVideoOpacityIn, currentYOffset)
                    objs.backgroundVideo.style.transform = `translate3d(0, ${calcValues(values.backgroundVideoTranslateYIn, currentYOffset)}%, 0) scale(${calcValues(values.flowTitleScaleIn, currentYOffset)})`
                } else {
                    objs.backgroundVideo.style.opacity = calcValues(values.backgroundVideoOpacityOut, currentYOffset)
                    objs.backgroundVideo.style.transform = `translate3d(0, ${calcValues(values.backgroundVideoTranslateYOut, currentYOffset)}%, 0) scale(${calcValues(values.flowTitleScaleIn, currentYOffset)})`
                }

                if (scrollRatio > 0.8) {
                    const objs = sectionInfo[5].objs
                    const values = sectionInfo[5].values

                    objs.tripleLeft.style.display = 'block'
                    objs.tripleLeft.style.opacity = calcValues(values.tripleLeftOpacityIn, currentYOffset)
                    objs.tripleLeft.style.transform = `translate3d(0, ${calcValues(values.tripleLeftTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    const objs = sectionInfo[5].objs
                    objs.tripleLeft.style.display = null
                }
                break

            case 5:
                if (scrollRatio < 0.475) {
                    objs.tripleLeft.style.transform = `translate3d(0, ${calcValues(values.tripleLeftTranslateYIn1, currentYOffset)}%, 0)`
                    objs.tripleLeft.style.opacity = calcValues(values.tripleLeftOpacityIn1, currentYOffset)
                    objs.tripleCenter.style.transform = `translate3d(0, ${calcValues(values.tripleCenterTranslateYIn, currentYOffset)}%, 0)`
                    objs.tripleCenter.style.opacity = calcValues(values.tripleCenterOpacityIn, currentYOffset)
                    objs.tripleRight.style.transform = `translate3d(0, ${calcValues(values.tripleRightTranslateYIn, currentYOffset)}%, 0)`
                    objs.tripleRight.style.opacity = calcValues(values.tripleRightOpacityIn, currentYOffset)
                } else {
                    objs.tripleWrapper.style.opacity = calcValues(values.tripleOpacityOut, currentYOffset)
                    objs.tripleWrapper.style.transform = `translate3d(0, ${calcValues(values.tripleTranslateYOut, currentYOffset)}%, 0)`
                }

                if (scrollRatio > 0.75) {
                    objs.scrollMainMessage.style.transform = `scale(${calcValues(values.scrollMainMessageScaleIn, currentYOffset)})`
                }

                break

            case 6:
                if (scrollRatio > 0.6) {
                    objs.scrollWrapperAreaOne.style.opacity = calcValues(values.scrollWrapperAreaOneOpacityIn, currentYOffset)
                }
                break

            case 7:
                rangeVideoLoop(0.05, 0.75, objs.videoTwo, scrollRatio)
                rangeVideoLoop(0.3, 1, objs.videoThree, scrollRatio)

                if (scrollRatio < 0.2) {
                    objs.scrollWrapperAreaOne.style.opacity = calcValues(values.scrollWrapperAreaOneOpacityOut, currentYOffset)
                }

                if (scrollRatio < 0.35) {
                    objs.scrollWrapperAreaTwo.style.opacity = calcValues(values.scrollWrapperAreaTwoOpacityIn, currentYOffset)
                } else {
                    objs.scrollWrapperAreaTwo.style.opacity = calcValues(values.scrollWrapperAreaTwoOpacityOut, currentYOffset)
                }

                if (scrollRatio < 0.62) {
                    objs.scrollWrapperAreaThree.style.opacity = calcValues(values.scrollWrapperAreaThreeOpacityIn, currentYOffset)
                } else {
                    objs.scrollWrapperAreaThree.style.opacity = calcValues(values.scrollWrapperAreaThreeOpacityOut, currentYOffset)
                }

                if (scrollRatio > 0.66) {
                    const objs = sectionInfo[8].objs
                    const values = sectionInfo[8].values

                    // 가로/세로 모두 꽉 차게 하기 위해 여기서 세팅(계산 필요)
                    const widthRatio = window.innerWidth / objs.canvas.width
                    const heightRatio = window.innerHeight / objs.canvas.height
                    let canvasScaleRatio;

                    if (widthRatio <= heightRatio) {
                        // 캔버스보다 브라우저 창이 홀쭉한 경우
                        canvasScaleRatio = heightRatio
                    } else {
                        // 캔버스보다 브라우저 창이 납작한 경우
                        canvasScaleRatio = widthRatio
                    }

                    objs.canvas.style.transform = `translate3d(-50%, ${-50 + calcValues(values.canvasTranslateYIn, currentYOffset)}%, 0) scale(${canvasScaleRatio})`
                    objs.context.drawImage(objs.images[0], 0, 0)

                    objs.canvas.style.display = null
                } else {
                    const objs = sectionInfo[8].objs
                    objs.canvas.style.display = 'none'
                }
                break

            case 8:
                objs.canvas.style.transform = `translate3d(-50%, -50%, 0)`
                objs.context.drawImage(objs.images[0], 0, 0);

                values.blendHeight[0] = 0
                values.blendHeight[1] = objs.canvas.height

                if (scrollRatio > 0.4) {
                    const blendHeight = calcValues(values.blendHeight, currentYOffset)
                    objs.context.drawImage(objs.images[1],
                        0, objs.canvas.height - blendHeight, objs.canvas.width, blendHeight,
                        0, objs.canvas.height - blendHeight, objs.canvas.width, blendHeight)
                }

                if (scrollRatio < 0.4) {
                    objs.screenTitle.style.opacity = calcValues(values.lightPartOpacityIn, currentYOffset)
                    objs.screenTitle.style.top = `${calcValues(values.screentTitleTranslateYIn, currentYOffset) + 13}vh`
                    objs.centerImageLight.style.opacity = calcValues(values.lightPartOpacityIn, currentYOffset)
                    objs.centerImageLight.style.transform = `translate3d(0, ${calcValues(values.centerImageLightTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.screenTitle.style.top = `${calcValues(values.screentTitleTranslateYOut, currentYOffset) + 13}vh`
                    objs.centerImageLight.style.opacity = calcValues(values.centerImageLightOpacityOut, currentYOffset)
                }

                if (scrollRatio < 0.75) {
                    objs.screenFooter.style.bottom = `${calcValues(values.screenFooterTranslateYIn, currentYOffset) + 13}vh`
                    objs.screenFooter.style.opacity = calcValues(values.screenFooterOpacityIn, currentYOffset)
                    objs.centerImageDark.style.opacity = calcValues(values.centerImageDarkOpacityIn, currentYOffset)
                } else {
                    objs.screenFooter.style.bottom = `${calcValues(values.screenFooterTranslateYOut, currentYOffset) + 13}vh`
                    objs.screenFooter.style.opacity = `${calcValues(values.screenFooterOpacityOut, currentYOffset)}`
                    objs.centerImageDark.style.transform = `translate3d(0, ${calcValues(values.centerImageDarkTranslateYOut, currentYOffset)}%, 0)`
                }

                break

            case 9:
                if (scrollRatio > 0) {
                    const objs = sectionInfo[8].objs
                    objs.canvas.style.display = 'none'
                }
                
                rangeVideoLoop(0, 1, objs.backgroundVideoOne, scrollRatio)
                rangeVideoLoop(0, 1, objs.backgroundVideoTwo, scrollRatio)
                rangeVideoLoop(0, 1, objs.backgroundVideoThree, scrollRatio)

                if (scrollRatio < 0.08) {
                    objs.flowTextOne.style.opacity = calcValues(values.flowTextOneOpacityIn1, currentYOffset)
                    objs.flowTextOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYIn1, currentYOffset)}%, 0)`
                    objs.backgroundVideoOne.style.opacity = calcValues(values.flowTextOneOpacityIn1, currentYOffset)
                    objs.backgroundVideoOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYIn1, currentYOffset)}%, 0)`
                } else {
                    objs.flowTextOne.style.opacity = calcValues(values.flowTextOneOpacityOut1, currentYOffset)
                    objs.flowTextOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYOut1, currentYOffset)}%, 0)`
                    objs.backgroundVideoOne.style.opacity = calcValues(values.flowTextOneOpacityOut1, currentYOffset)
                    objs.backgroundVideoOne.style.transform = `translate3d(0, ${calcValues(values.flowTextOneTranslateYOut1, currentYOffset)}%, 0)`
                }

                if (scrollRatio < 0.31) {
                    objs.flowTextTwo.style.opacity = calcValues(values.flowTextTwoOpacityIn1, currentYOffset)
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYIn1, currentYOffset)}%, 0)`
                    objs.backgroundVideoTwo.style.opacity = calcValues(values.flowTextTwoOpacityIn1, currentYOffset)
                    objs.backgroundVideoTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYIn1, currentYOffset)}%, 0)`
                } else {
                    objs.flowTextTwo.style.opacity = calcValues(values.flowTextTwoOpacityOut1, currentYOffset)
                    objs.flowTextTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYOut1, currentYOffset)}%, 0)`
                    objs.backgroundVideoTwo.style.opacity = calcValues(values.flowTextTwoOpacityOut1, currentYOffset)
                    objs.backgroundVideoTwo.style.transform = `translate3d(0, ${calcValues(values.flowTextTwoTranslateYOut1, currentYOffset)}%, 0)`
                }

                if (scrollRatio < 0.56) {
                    objs.flowTitleThree.style.opacity = calcValues(values.flowThreeOpacityIn1, currentYOffset)
                    objs.flowTitleThree.style.transform = `translate3d(0, ${calcValues(values.flowThreeTranslateYIn1, currentYOffset)}%, 0)`
                    objs.flowFooterThree.style.opacity = calcValues(values.flowThreeOpacityIn1, currentYOffset)
                    objs.flowFooterThree.style.transform = `translate3d(0, ${calcValues(values.flowThreeTranslateYIn1, currentYOffset)}%, 0)`
                    objs.backgroundVideoThree.style.opacity = calcValues(values.flowThreeOpacityIn1, currentYOffset)
                    objs.backgroundVideoThree.style.transform = `translate3d(0, ${calcValues(values.flowThreeTranslateYIn1, currentYOffset)}%, 0)`
                } else {
                    objs.flowTitleThree.style.opacity = calcValues(values.flowThreeOpacityOut1, currentYOffset)
                    objs.flowTitleThree.style.transform = `translate3d(0, ${calcValues(values.flowThreeTranslateYOut1, currentYOffset)}%, 0)`
                    objs.flowFooterThree.style.opacity = calcValues(values.flowThreeOpacityOut1, currentYOffset)
                    objs.flowFooterThree.style.transform = `translate3d(0, ${calcValues(values.flowThreeTranslateYOut1, currentYOffset)}%, 0)`
                    objs.backgroundVideoThree.style.opacity = calcValues(values.flowThreeOpacityOut1, currentYOffset)
                    objs.backgroundVideoThree.style.transform = `translate3d(0, ${calcValues(values.flowThreeTranslateYOut1, currentYOffset)}%, 0)`
                }

                if (scrollRatio < 0.775) {
                    objs.imageCanvas.style.transform = `translate3d(-50%, ${-50 + calcValues(values.backgroundImageTranslateYIn1, currentYOffset)}%, 0) scale(${calculateCanvasSacleRatio(objs)})`
                    objs.imageCanvasContext.drawImage(objs.images[0], 0, 0)
                } else {
                    objs.imageCanvas.style.transform = `translate3d(-50%, ${-50 + calcValues(values.backgroundImageTranslateYOut1, currentYOffset)}%, 0) scale(${calculateCanvasSacleRatio(objs)})`
                    objs.imageCanvasContext.drawImage(objs.images[0], 0, 0)
                }

                break

            case 10:
                if (scrollRatio > 0) {
                    const objs = sectionInfo[11].objs
                    objs.realLastWrapper.classList.remove('real-last-wrapper-fixed')
                }
                break

            case 11:
                objs.realLastWrapper.classList.add('real-last-wrapper-fixed')
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

    function setPercentage() {
        let timer = null
        let percentageIncreaser = function() {
            if (percentage < 100) {
                percentage += 1
                document.querySelector("#progress-logo").style.opacity = `${percentage / 100}`
                document.querySelector("#progress-percentage").innerText = `${percentage}%`
            } else {
                clearInterval(timer)
                document.body.style.overflowY = null
                document.getElementById("loading-page").style.display = 'none'
            }
        }
        timer = setInterval(percentageIncreaser, 10)
    }

    setCanvasImages()
    window.addEventListener('load', () => {
        setLayout()
        setScrollIndicatorWidth()
        setPercentage()
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
