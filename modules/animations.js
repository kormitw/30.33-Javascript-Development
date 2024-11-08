export class animationElement {
    constructor(elementId, animationData = [], animationTiming = {}){
        this.element = document.getElementById(elementId);
        this.animationData = animationData;
        this.animationTiming = animationTiming;
    }

    startAnimation() {
        this.animation = this.element.animate(this.animationData, this.animationTiming)
    }
}