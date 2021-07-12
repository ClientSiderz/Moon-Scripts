var module = moduleManager.addModule("FollowAura", "Follow Extension for Kill Aura", "Follow Aura");

module.hook("eventMotion", function (event) {
    if(moduleManager.isModuleEnabled("KillAura") && client.killauraTarget() != null) {
		player.setPosition(client.killauraTarget().x, client.killauraTarget().y, client.killauraTarget().z);
	}
    return event;
})