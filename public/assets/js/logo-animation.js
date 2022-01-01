const sketch = (p) => {
    let toggled = false

    let fillLogo = () => {
        p.fill('#fbc604')
        p.stroke('#0e8b70')
    }

    let clearFillLogo = () => {
        p.noFill()
        p.noStroke()
        p.normalMaterial() 
    }

    p.setup = () => {
        const canvas = p.createCanvas(250, 250, p.WEBGL)
        canvas.mouseOver(() => toggled = true)
        canvas.mouseOut(() => toggled = false)
        logo = p.loadModel('/assets/models/eds-logo.stl')
    }

    p.draw = () => {
        toggled ? fillLogo() : clearFillLogo()
        p.background(0, 0, 0, 0)
        p.scale(40)
        p.rotateX(p.frameCount * 0.015);
        p.rotateY(p.frameCount * 0.015);
        p.model(logo)
    }
}

new p5(sketch, 'logo-animation')