# key pair 
resource "aws_key_pair" "ec2_key_pair" {
  key_name = "ec2_key_pair"
  public_key = file("keys/foodapp-instance.pub")
}

# VPC
resource "aws_default_vpc" "default_vpc" {
  
}

# Security group
resource "aws_security_group" "default_sg" {
  name = "default_sg"
  vpc_id = aws_default_vpc.default_vpc.id
  
}

resource "aws_vpc_security_group_ingress_rule" "ssh" {
  security_group_id = aws_security_group.default_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 22
  to_port           = 22
  ip_protocol       = "tcp"
}

resource "aws_vpc_security_group_ingress_rule" "http" {
  security_group_id = aws_security_group.default_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 80
  to_port           = 80
  ip_protocol       = "tcp"
}

resource "aws_vpc_security_group_ingress_rule" "https" {
  security_group_id = aws_security_group.default_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 443
  to_port           = 443
  ip_protocol       = "tcp"
}

resource "aws_vpc_security_group_ingress_rule" "jenkins" {
  security_group_id = aws_security_group.default_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 8080
  to_port           = 8080
  ip_protocol       = "tcp"
}

resource "aws_vpc_security_group_ingress_rule" "sonarqube" {
  security_group_id = aws_security_group.default_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 9000
  to_port           = 9000
  ip_protocol       = "tcp"
}

resource "aws_vpc_security_group_egress_rule" "Outbound_rules" {
  security_group_id = aws_security_group.default_sg.id
  cidr_ipv4 = "0.0.0.0/0"
  ip_protocol = -1
}

# Ec2 instance
resource "aws_instance" "foodapp-instance" {  
  key_name = aws_key_pair.ec2_key_pair.key_name
  security_groups = [aws_security_group.default_sg.name]
  instance_type = "t2.medium"
  ami = var.ami_id
  user_data = file("/user_data.sh")

  root_block_device {
    volume_size = 30
    volume_type = "gp3"
  }

  tags = {
    Name = "FoodApp-Instance"
  }
}
