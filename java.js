import java.util.Scanner;

public class Hello{
  public static void main(String args[]){
  Scanner sc = new Scanner(System.in);  
  
  System.out.println('Olá mundo');
  
  System.out.println('Insira sua idade:');
  int idade;
  idade = sc.nextLine();
  
  System.out.println('A sua idade é: ' + idade);
  
