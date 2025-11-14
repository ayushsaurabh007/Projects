package main;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import tile.TileManager ;

import javax.swing.JPanel ;

import entity.Player;

public class GamePanel extends JPanel implements Runnable{
    //screen settings 
    final int originalTileSize = 16 ; //16*16 size
    final int scale = 3;

    public final int tileSize = originalTileSize * scale ;    //48*48
    public final int maxScreenCol = 16 ;
    public final int maxScreenRow = 12;
    public final int screenWidth = tileSize * maxScreenCol;   //768 pixels    == 16*48
    public final int screenHeight = tileSize * maxScreenRow ;  //576 pixels     == 12*48

    //WORLD SETTINGS
    public final int maxWorldCol = 50;
    public final int maxWorldRow = 50;
    public final int worldWidth = tileSize * maxWorldCol ;
    public final int worldHeight = tileSize * maxWorldRow ;

    //FPS 
    int FPS = 60;

    TileManager tileM = new TileManager(this);
    KeyHandler keyH = new KeyHandler();
    Thread gameThread ;                //this is going to make time in our game  (when we call this thread run method starts)
    public CollisionChecker cChecker = new CollisionChecker(this);
    public Player player = new Player(this, keyH);

    //Set players default position
    // int playerX = 100;
    // int playerY = 100;
    // int playerSpeed = 4;

    public GamePanel(){         //constructor for gamepanel
        this.setPreferredSize(new Dimension(screenWidth , screenHeight));
        this.setBackground(Color.black);
        this.setDoubleBuffered(true);
        this.addKeyListener(keyH);
        this.setFocusable(true);
    }

    public void startGameThread(){
        gameThread = new Thread(this);
        gameThread.start();
    }

    // @Override
    // public void run(){      //when an object implementing interface Runnable

    //     double drawInterval = 1000000000 / FPS;   //0.01666 sec
    //     double nextDrawTime = System.nanoTime() + drawInterval;

    //     while(gameThread != null){

    //         //1. UPDATE : update information such as character position
    //         update();
    //         //2. DRAW : draw the screenn with the updated information
    //         repaint();    //this is how you call the paintComponenet method

      
    //         try{
    //             double remainingTime = nextDrawTime - System.nanoTime();
    //             remainingTime = remainingTime / 1000000;      //cause sleep method accepts time in long milliseconds
    //             if(remainingTime < 0){
    //                 remainingTime = 0 ;
    //             }
    //             Thread.sleep((long) remainingTime);

    //             nextDrawTime += drawInterval;
    //         }catch (InterruptedException e){
    //             e.printStackTrace();;
    //         }
    //     }
    // }

    @Override
    public void run(){
        
        double drawInterval = 1000000000 / FPS;
        double delta = 0;
        long lastTime = System.nanoTime();
        long currentTime;
        long timer = 0 ;
        int drawCount = 0;
        while (gameThread != null){
            currentTime = System.nanoTime();
            
            delta += (currentTime - lastTime) / drawInterval ;
            timer += (currentTime - lastTime);
            lastTime = currentTime;

            if(delta >= 1){
                update() ;
                repaint();
                delta--;
                drawCount++;
            }
            if(timer >= 1000000000){
                System.out.println("FPS" + drawCount);
                drawCount = 0 ;
                timer = 0;
            }
        }
    }

    public void update() {
        player.update();
    }
    public void paintComponent(Graphics g) {
        super.paintComponent(g) ;
        Graphics2D g2 = (Graphics2D)g;
        
        tileM.draw(g2);
        
        player.draw(g2);

        g2.dispose();
    }

}
