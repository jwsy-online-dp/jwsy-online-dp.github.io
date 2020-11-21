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
                textFirst: document.querySelector("#scroll-section-0 .dimed-text .first"),
                textSecond: document.querySelector("#scroll-section-0 .dimed-text .second"),
            }
        },
        {
            // scroll-section-1
            type: "scroll-anim",
            height: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-1"),
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

        switch(currentSection) {
            case 0:
                console.log(`play 0 ${currentSection}`)
                break
            case 1:
                console.log(`play 1 ${currentSection}`)
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

    window.addEventListener('load', setLayout)
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset
        scrollLoop()
    })
    window.addEventListener('resize', setLayout)
})()
