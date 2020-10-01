import java.util.Scanner;

public class forInJava{
  public static void main(String args[]){
    Scanner sc = new Scanner(System.in);
    
    int quant = 0;
    System.out.println('Insira a quantidade de vezes que deseja que imprima um Olá mundo!')
    quant = sc.nextInteger();
    for(int i=0; i<quant; i++){
      System.out.println('Repetindo... -> ' i+1);
    }
  }
}
