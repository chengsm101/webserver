 webiopi().ready(function() {
        		webiopi().setFunction(2,"out");
        		webiopi().setFunction(3,"out");
        		webiopi().setFunction(4,"out");
        		
        		var content, button;
        		content = $("#content");
        		
        		button = webiopi().createGPIOButton(2,"LED1");
        		content.append(button);
        		
        		button = webiopi().createGPIOButton(3,"LED2");
        		content.append(button);
        		
        		button = webiopi().createGPIOButton(4,"LED3");
        		content.append(button);
        		
        });