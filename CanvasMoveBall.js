function collideBalls(ball, ball2)
	{
		var dx = ball.x - ball2.x;
		var dy = ball.y - ball2.y;
		
		var collisionAngle = Math.atan2(dy, dx);
		
		var speed3 = Math.sqrt((ball.velocityx * ball.velocityx) + (ball.velocityy * ball.velocityy));
		var speed4 = Math.sprt((ball2.velocityx * ball2.velocityx) + (ball2.velocityy * ball2.velocityy));
		
		var direction1 = Math.atan2(ball.velocityy, ball.velocityx);
		var direction2 = Math.atan2(ball2.velocityy, ball2.velocityx);
		
		var velocityx_1 = speed3 * Math.cos(direction1 - collisionAngle);
		var velocityy_1 = speed3 * Math.sin(direction1 - collisionAngle);
		var velocityx_2 = speed4 * Math.cos(direction2 - collisionAngle);
		var velocityy_2 = speed4 * Math.sin(direction2 - collisionAngle);
		
		var final_velocityx_1 = ((ball.mass - ball2.mass) * velocityx_1 + (ball2.mass + ball2.mass) * velocityx_2)/(ball.mass + ball2.mass);
		var final_velocityx_2 = ((ball.mass + ball2.mass) * velocityx_1 + (ball2.mass - ball.mass) * velocityx_2)/(ball.mass + ball2.mass);
		
		var final_velocityy_1 = velocityy_1;
		var final_velocityy_2 = velocityy_2;
		
		ball.velocityx = Math.cos(collisionAngle) * final_velocityx_1 + Math.cos(collisionAngle + Math.PI/2) * final_velocityy_1;
		ball.velocityy = Math.sin(collisionAngle) * final_velocityx_1 + Math.sin(collisionAngle + Math.PI/2) * final_velocityy_1;
		ball2.velocityx = Math.cos(collisionAngle) * final_velocityx_2 + Math.cos(collisionAngle + Math.PI/2) * final_velocityy_2;
		ball2.velocityy = Math.sin(collisionAngle) * final_velocityx_2 + Math.sin(collisionAngle + Math.PI/2) * final_velocityy_2;
		
		ball.x = (ball.x += ball.velocityx);
		ball.y = (ball.y += ball.velocityy);
		ball2.x = (ball2.x += ball2.velocityx);
		ball2.y = (ball2.y += ball2.velocityy);
	}