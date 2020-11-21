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
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-1"),
                titleBox: document.querySelector("#scroll-section-1 .title-box")
            },
            values: {
                titleBoxOpacityIn: [0, 1, { start: 0.5, end: 0.5 }],
                titleBoxOpacityOut: [1, 0, { start: 0.9, end: 0.9 }],
                titleBoxTranslateYIn: [200, 0, { start: 0.5, end: 0.6 }],
                titleBoxTranslateYOut: [0, -200, { start: 0.8, end: 0.9 }],
            }
        },
        {
            // scroll-section-2
            type: "scroll-anim",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-2"),
            }
        },
        {
            // scroll-section-3
            type: "scroll-anim",
            height: 3,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-3"),
            }
        },
        {
            // scroll-section-4
            type: "scroll-anim",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-4"),
            }
        },
        {
            // scroll-section-5
            type: "scroll-anim",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-5"),
            }
        },
    ]

    function setLayout() {
        for (let i = 0; i < sectionInfo.length; i++) {
            sectionInfo[i].scrollHeight = sectionInfo[i].height * window.innerHeight
            sectionInfo[i].objs.container.style.height = `${sectionInfo[i].scrollHeight}px`
        }

        document.body.setAttribute('id', `show-scene-${currentSection}`)
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
                if (scrollRatio <= 0.6) {
                    objs.titleBox.style.opacity = calcValues(values.titleBoxOpacityIn, currentYOffset)
                    objs.titleBox.style.transform = `translate3d(0, ${calcValues(values.titleBoxTranslateYIn, currentYOffset)}%, 0)`
                } else {
                    objs.titleBox.style.opacity = calcValues(values.titleBoxOpacityOut, currentYOffset)
                    objs.titleBox.style.transform = `translate3d(0, ${calcValues(values.titleBoxTranslateYOut, currentYOffset)}%, 0)`
                }
                break
            case 2:
                console.log(`play 2 ${currentSection}`)
                break
            case 3:
                console.log(`play 3 ${currentSection}`)
                break
            case 4:
                console.log(`play 4 ${currentSection}`)
                break
            case 5:
                console.log(`play 5 ${currentSection}`)
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

    window.addEventListener('load', setLayout)
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset
        scrollLoop()
    })
    window.addEventListener('resize', setLayout)
})()
