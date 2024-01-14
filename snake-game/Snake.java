
import java.awt.Color;
import java.awt.Container;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.ArrayList;
import java.util.Random;

import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.Timer;
class Pixel
{
	public int x;
	public int y;
	Pixel(int a,int b)
	{
		x=a;
		y=b;
	}
}
public class Snake extends JPanel implements KeyListener {
	static Timer t;
	static JFrame frame;
	static ArrayList<Pixel> al;
	static int xco,yco;
	static Pixel food;
	static int d;
	static int score;
  public Snake() {
    addKeyListener(this);
  }

  public void keyPressed(KeyEvent evt) {
    int keyCode = evt.getKeyCode();
    if (keyCode == KeyEvent.VK_LEFT){
    	if(d==1||d==3){
    		d=4;
    	}
    }
    else if (keyCode == KeyEvent.VK_RIGHT){
    	if(d==1||d==3){
    		d=2;
    	}
    }
    else if (keyCode == KeyEvent.VK_UP){
    	if(d==2||d==4){
    		d=3;
    	}
    }
    else if (keyCode == KeyEvent.VK_DOWN){
    	if(d==2||d==4){
    		d=1;
    	}
    }
  }

  public void keyReleased(KeyEvent evt) {
  }

  public void keyTyped(KeyEvent evt) {
  }

  public boolean isFocusTraversable() {
    return true;
  }

  public void paintComponent(Graphics g){
	  super.paintComponent(g);
	  g.setColor(new Color(140,70,20));
	  for(int c=0;c<al.size();c++){
		  Pixel p=(Pixel)al.get(c);
		  g.fillRoundRect(p.x*8,p.y*8,8, 8,4, 4);
	  }
	  g.setColor(Color.orange);
	  g.fillRoundRect(food.x*8, food.y*8, 8, 8, 4, 5);
  }

  public static void main(String[] args) {
    frame = new JFrame();
    frame.setTitle("Snake");
    frame.setSize(184, 327);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

    final Container contentPane = frame.getContentPane();
    contentPane.add(new Snake());
    frame.setVisible(true);
    start();
    t=new Timer(300,new ActionListener(){
    	public void actionPerformed(ActionEvent e){
    		if(d==1){
    			if(yco==35)
    				yco=0;
    			else yco++;
    		}
    		if(d==2){
    			if(xco==20)
    				xco=0;
    			else xco++;
    		}
    		if(d==3){
    			if(yco==0)
    				yco=35;
    			else yco--;
    		}
    		if(d==4){
    			if(xco==0)
    				xco=20;
    			else xco--;
    		}
    		if(end(xco,yco)){
    			al.add(new Pixel(xco,yco));
    			if(food(xco,yco)){
    				Random r=new Random();
    				food=new Pixel(r.nextInt(20),r.nextInt(35));
    			}
    			else
    				al.remove(0);
    		}
    		else
    			over();
    		contentPane.repaint();
    	}
    });
    t.start();
  }
  public static boolean end(int xco,int yco){
	  for(int c=0;c<al.size();c++){
		  Pixel p=(Pixel)al.get(c);
		  if(p.x==xco && p.y==yco)
			  return false;
	  }
	  return true;
  }
  public static boolean food(int xco,int yco){
	  if(food.x==xco && food.y==yco){
		  score++;
		  return true;
	  }
	  else
		  return false;
  }
  public static void over(){
	  JOptionPane.showMessageDialog(frame, "Your Score is "+score, "Game Over", JOptionPane.ERROR_MESSAGE );
	  start();
  }
  public static void start(){
		al=new ArrayList();
		xco=2;
		yco=0;
		food=new Pixel(20,35);
		d=2;
		score=0;
	    al.add(new Pixel(0,0));
	    al.add(new Pixel(1,0));
	    al.add(new Pixel(2,0));
  }

}