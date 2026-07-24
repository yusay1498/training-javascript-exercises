export function renderMemberList(container, members) {
    container.textContent = ""

    members.forEach((member) => {
        const li = document.createElement("li")
        li.textContent = `${member.name} (${member.score}点)`
        container.appendChild(li)
    })
}
