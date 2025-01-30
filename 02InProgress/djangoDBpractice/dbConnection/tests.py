from django.test import TestCase
from django.utils import timezone
from .models import Student

# Create your tests here.
class StudentModelTest(TestCase):

    def setUp(self):
        Student.objects.create(name="John", last_name="Smith", age=20)
        Student.objects.create(name="Jane", last_name="Walter", age=22)

    def test_student_creation(self):
        john = Student.objects.get(name="John")
        jane = Student.objects.get(name="Jane")
        self.assertEqual(john.age, 20)
        self.assertEqual(jane.age, 22)