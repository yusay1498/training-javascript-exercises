export function filterPassed(members, passingScore) {
    return members.filter((member) => member.score >= passingScore)
}

export function toNameList(members) {
    return members.map((member) => member.name)
}

export function sumScores(members) {
    return members.reduce((sum, member) => sum + member.score, 0)
}

export function hasAnyFailed(members, passingScore) {
    return members.some((member) => member.score < passingScore)
}
