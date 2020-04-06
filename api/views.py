from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import routers
from rest_framework import filters

# Rather than managing all urls and endpoints explicitly we can use a
# router to manage multiple endpoints and urls per class for us.
router = routers.DefaultRouter()

# class ViewRegionRanks(viewsets.ModelViewSet):
#     serializer_class = RegionRanksSerializer
#     queryset = RegionRanks.objects.all()
#
#     class RegionRanksFilter(filters.FilterSet):
#         class Meta:
#             model = RegionRanks
#             fields = {'region': ['in'], 'year': ['in', 'contains'], 'month': ['in', 'contains'],
#                       'Crime_cat': ['in', 'contains'], 'crime_index': ['in', 'contains', 'lt', 'gt', 'range']}
#
#     filter_class = RegionRanksFilter
#
#
# router.register(r'nav', ViewRegionRanks, base_name='region_ranks')
